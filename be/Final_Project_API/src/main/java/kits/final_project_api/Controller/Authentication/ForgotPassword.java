package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.RegisterRequestDto;
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
@RequestMapping("api/reset-password")
public class ForgotPassword {

    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

//    @PostMapping
//    public ResponseEntity<RegisterResponseDto> forgotPassword(@RequestBody RegisterRequestDto registerRequest,
//                                                              HttpServletResponse response) {
//        // user entity
//        Account account = accountService.findByEmail(registerRequest.getEmail());
//        System.out.println("ACCOUNT: " + account);
//        if (account == null) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RegisterResponseDto("Email not found", "",
//                    "", "EMAIL_NOT_FOUND"));
//        } else {
//            // if user exists
//            try {
//                account.setPassword(bCryptPasswordEncoder.encode(registerRequest.getPassword()));
//                String token = UtilsService.getRandomHexString(150);
//                account.setToken(token);
//                accountService.updateTokenById(token, account.getAccountId());
//                // Set cookie
//                Cookie cookie = new Cookie("token", token);
//                cookie.setMaxAge(3600);
//                //add cookie to response
//                response.addCookie(cookie);
//
//                return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("Reset Password Successfully",
//                        "", "",
//                        "RESET_PASSWORD_SUCCESSFULLY"));
//            } catch (Exception e) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RegisterResponseDto("Unknown Error", "",
//                        e.getMessage(), "UNKNOWN_ERROR"));
//            }
//        }
//    }
}