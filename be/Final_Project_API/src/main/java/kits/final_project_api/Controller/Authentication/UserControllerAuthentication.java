package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.HttpServletRequest;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api")
public class UserControllerAuthentication {
    @Autowired
    private AccountService accountService;

    @GetMapping("/session-address-wallet/{token}")
    public List<Map<String, Object>> sessionUser(HttpServletRequest request, @PathVariable String token){
        String rawCookie = token;

        if(rawCookie != null) {
            Account user = accountService.findByToken(rawCookie);
            System.out.println("USERRR: " + user);
            List<Map<String, Object>> result = new ArrayList<>();
            Map<String, Object> newMap = new HashMap<>();
            if (user != null) {

                newMap.put("account_id", user.getAccountId());
                newMap.put("address_wallet", user.getAddress_wallet());
                newMap.put("username", user.getUsername());
                newMap.put("email", user.getEmail());
                newMap.put("avatar", user.getAvatar());
                newMap.put("background", user.getBackground());
                newMap.put("biography", user.getBiography());
                result.add(newMap);
                return result;
            }
        }
        return  null;
    }

//    @GetMapping("/session/address-wallet/Ơ")
//    public String getAddressWallet(){
//        String address_wallet = accountService.findByAddressWallet()
//    }
}
