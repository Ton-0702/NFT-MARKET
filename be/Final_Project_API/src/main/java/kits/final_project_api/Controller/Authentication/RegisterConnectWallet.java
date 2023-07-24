package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.Response.RegisterResponseDto;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.Utils.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/register/connect-wallet", method = RequestMethod.POST)
public class RegisterConnectWallet {
    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<RegisterResponseDto> registerCreateAccount(@Valid @RequestParam(value = "address_wallet") String address_wallet,
                                                                     @RequestParam(value = "username") String username,
                                                                     @RequestParam(value = "bio") String bio, @RequestParam(value = "email") String email,
                                                                     @RequestParam(value = "image") String image, @RequestParam(value = "background") String background,
                                                                     HttpServletResponse response){
        Account account_create = new Account();
//        account_create.setUsername(accountCreateDTO.getUsername());
//        account_create.setEmail(accountCreateDTO.getEmail());
//        account_create.setPassword(accountCreateDTO.getPassword());
        account_create.setAddress_wallet(address_wallet);
//        System.out.println("formData.get(address_wallet).toString(): "+formData.get("address_wallet").toString());
        // kiểm tra có trùng address wallet không
        Account foundAccountAddressWallet = accountService.findByAddressWallet(address_wallet);

        if(foundAccountAddressWallet == null){
            try {
                Account foundAccountEmail = accountService.findByEmail(email);
                Account foundAccount = accountService.findByUsername(username);
                if (foundAccountEmail == null && foundAccount == null){
                    account_create.setUsername(username);
                    account_create.setEmail(email);
                    account_create.setAvatar(image);
                    account_create.setBackground(background);
                    account_create.setBiography(bio);
                    //Tạo token ngẫu nhiên qua class UtilsService và hàm getRandomHexString trong class đó, sau đó gắn vào token entity account
                    account_create.setToken(UtilsService.getRandomHexString(100));
                    accountService.saveAndFlush(account_create);
                    // Set cookie
                    Cookie cookie = new Cookie("token", account_create.getToken());
                    cookie.setMaxAge(3600); // Set thời gian cookie lưu trữ token là 1 tiếng sau đó xóa đi
//                    cookie.setHttpOnly(true);
                    cookie.setPath("/");

                    //add cookie to response
                    response.addCookie(cookie);

                    return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("Created Successfully", account_create.getToken(), "", "Created_Succesfully"));
                }else{
                    if(foundAccount != null){
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RegisterResponseDto("Username Exist", account_create, "", "Username_Exist"));
                    }else {
                        if (foundAccountEmail != null){
                            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RegisterResponseDto("Email Exist", account_create, "", "Email_Exist"));
                        }
                    }
                }
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RegisterResponseDto("", "", e.getMessage(),
                        "UNKNOWN_ERROR"));
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("Address Wallet already exists", "", "", "Address_Wallet_EXIST"));
    }
}
