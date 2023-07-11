package kits.final_project_api.Controller;

import kits.final_project_api.Entity.Account;
//import kits.final_project_api.Service.CategoryService;
//import kits.final_project_api.Service.ProductService;
import kits.final_project_api.Model.TopCreatorDTO;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("users") // /users
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping
    @ResponseBody
    public List<Account> getAllUsers(Model model) {
//        System.out.println("TESST: "+userService.findAll());
        List<Account> users = accountService.findAll();
        model.addAttribute("users", users);
        return users;
//
//        for(Account u : users) {
//            List<NFT> nfts = u.getNtfs();
//            System.out.println("NFT: "+nfts);
//            for(NFT n : nfts) {
//                System.out.println(n.getId() + " - " + n.getPrice());
//            }
//        }
//        return null;
//        return accounts;
    }

    @GetMapping("/ranking/today")
    @ResponseBody

    public List<Map<String, Object>> getTopCreatorToday(LocalDate date){
        LocalDateTime date_current = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-dd-MM HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        LocalDateTime dateTime = LocalDateTime.parse(date_current_format, myFormatObj);
        System.out.println("date_current_format: "+date_current_format);
        System.out.println("dateTime: "+dateTime);
        return accountService.getTopCreatorToday(date_current_format);
    }
}

