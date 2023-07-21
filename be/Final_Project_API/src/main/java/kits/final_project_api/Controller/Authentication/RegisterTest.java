package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.AccountCreateDTO;
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
@RequestMapping("api/register-test")
public class RegisterTest {
    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public ResponseEntity<RegisterResponseDto> resgisterCreateAccount(@Valid @RequestBody AccountCreateDTO accountCreateDTO, HttpServletResponse response){
        Account account_create = new Account();
        account_create.setUsername(accountCreateDTO.getUsername());
        account_create.setEmail(accountCreateDTO.getEmail());
//        account_create.setPassword(accountCreateDTO.getPassword());

        // kiểm tra có trùng username không
        Account foundAccount = accountService.findByUsername(accountCreateDTO.getUsername());

        if(foundAccount == null){
            try {
                    //Encode: mã hóa m password truyền từ client vào và setPassword vào thực thể account
//                    account_create.setAddress_wallet();
//                    account_create.setPassword(bCryptPasswordEncoder.encode(accountCreateDTO.getPassword()));
                    //Tạo token ngẫu nhiên qua class UtilsService và hàm getRandomHexString trong class đó, sau đó gắn vào token entity account
                    account_create.setToken(UtilsService.getRandomHexString(100));
                    accountService.saveAndFlush(account_create);
                    // Set cookie
                    Cookie cookie = new Cookie("token", account_create.getToken());
                    cookie.setMaxAge(3600); // Set thời gian cookie lưu trữ token là 1 tiếng sau đó xóa đi

                    //add cookie to response
                    response.addCookie(cookie);

                    return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto());
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RegisterResponseDto("", "", e.getMessage(),
                        "UNKNOWN_ERROR"));
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("User already exists", "", "", "USER_EXIST"));
    }
}
