package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.AccountCreateConnectWalletDTO;
import kits.final_project_api.Model.CreateAccount.LoginWalletDTO;
import kits.final_project_api.Model.Response.RegisterResponseDto;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.Utils.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/connect-wallet")
public class LoginConnectWallet {

    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public ResponseEntity<RegisterResponseDto> login(@Valid @RequestBody LoginWalletDTO loginWalletDTO,
                                                               HttpServletResponse response) {
        // account entity
        Account account = accountService.findByAddressWallet(loginWalletDTO.getAddress_wallet());
        System.out.println("account: " + account);
        if (account == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RegisterResponseDto("Address Wallet not found", "",
                    "", "Address_Wallet_NOT_FOUND"));
        } else {
            // if address wallet exists
            System.out.println("account: "+account.getAddress_wallet());
            System.out.println("(account.getAddress_wallet()): "+(account.getAddress_wallet()));
            System.out.println("account.equals(account.getAddress_wallet()) : "+account.equals(account.getAddress_wallet()));
            if ( (account.getAddress_wallet()).equals(account.getAddress_wallet()) ) {
                //1. generate new token
                String newToken = utilsService.getRandomHexString(100);
                System.out.println("NEW TOKEN: " + newToken);
                //2. update token
                accountService.updateTokenById(newToken, account.getAccountId());
                // Set cookie
                Cookie cookie = new Cookie("token", newToken);
                cookie.setMaxAge(3600);
                response.addCookie(cookie);

                return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("Login Successfully", "",
                        "", ""));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RegisterResponseDto("Wrong address wallet", "", "", "Address_Wallet_INVALID"));
            }
        }
    }
}