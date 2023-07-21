package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.HttpServletRequest;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserControllerAuthentication {
    @Autowired
    private AccountService accountService;

    @GetMapping("/session-address-wallet")
    public Account sessionUser(HttpServletRequest request){
        String rawCookie = request.getHeader("Cookie");
        if(rawCookie != null) {
            String[] rawCookieParams = rawCookie.split(";");
            Map<String, String> hd = new HashMap<>();
            for (String rawCookieNameAndValue : rawCookieParams) {
                String[] rawCookieNameAndValuePair = rawCookieNameAndValue.split("=");
                hd.put(rawCookieNameAndValuePair[0], rawCookieNameAndValuePair[1]);
            }
            System.out.println("TOKEN: " + hd.get("token"));
            Account user = accountService.findByToken(hd.get("token"));
            System.out.println("USERRR: " + user);
            if (user != null) {
                return user;
            }
        }
        return  null;
    }
}
