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
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/logout/{token}")
public class Logout {

    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public ResponseEntity<RegisterResponseDto> logout(@PathVariable String token,
                                                      HttpServletResponse response) {
        System.out.println("token log out: "+token);
        // user entity
        Account account = accountService.findByToken(token);
        if (account == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RegisterResponseDto("User logged out", "",
                    "", "USER_LOGGED_OUT"));
        } else {
            // if user exists
            //1. update token
            accountService.updateTokenById(null, account.getAccountId());
            //2. Set cookie
            Cookie cookie = new Cookie("token", "");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
            return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponseDto("Logout Successfully", "",
                    "", ""));
        }
    }
}
