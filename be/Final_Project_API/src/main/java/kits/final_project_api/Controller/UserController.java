package kits.final_project_api.Controller;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.NFT;
//import kits.final_project_api.Service.CategoryService;
//import kits.final_project_api.Service.ProductService;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("user") // /users
public class UserController {
//    @Autowired
//    UserService userService;
//
//    // Top Creator
//    @GetMapping
////    @RequestBody
//    public List<UserDTO> getAllUser(Model model){
//        // Get All user
//        List<UserDTO> users =userService.getAllUsers();
//        // 2. Pass users to model
//        model.addAttribute("users", users);
//        System.out.println("Get All user: "+users);
//        return users;
//    }


//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

//    @Autowired
//    private ProductService productService;
//
//    @Autowired
//    private CategoryService categoryService;

    @Autowired
    private AccountService userService;

    @GetMapping
    @ResponseBody
    public List<Account> getAllUsers(){
//        System.out.println("TESST: "+userService.findAll());
        List<Account> users = userService.findAll();
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
}

