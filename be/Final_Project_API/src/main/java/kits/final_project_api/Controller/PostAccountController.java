package kits.final_project_api.Controller;

import jakarta.validation.Valid;
import kits.final_project_api.Model.CreateAccount.AccountCreateDTO;
import kits.final_project_api.Model.CreateAccount.AccountMetaMaskDto;
import kits.final_project_api.Service.impl.PostAccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/post")
public class PostAccountController {
    @Autowired
    private PostAccountServiceImpl postAccountServiceImpl;

//    @PostMapping("/account-metamask")
//    @ResponseBody
    // Cách 1
//    public ResponseEntity<?> postMetaMask(@RequestBody AccountMetaMaskDto accountMetaMaskDto){
//        Account account = new Account();
//        account.setAddress_wallet(accountMetaMaskDto.getAddress_wallet());
//        account.setUsername(accountMetaMaskDto.getUsername());
//        account.setPassword(accountMetaMaskDto.getPassword());
//        account.setToken(accountMetaMaskDto.getToken());
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(account);
//
//
//    }
    @PostMapping("/connect-metamask")
    //Cách 2
    public ResponseEntity postMetaMask(@Valid @RequestBody AccountMetaMaskDto accountMetaMaskDto) {
        postAccountServiceImpl.postMetaMask(accountMetaMaskDto);
        return ResponseEntity.ok("Request Completed");
    }

    @PostMapping("/create-account")
    public ResponseEntity postCreateAccount(@Valid @RequestBody AccountCreateDTO accountCreateDTO){
        postAccountServiceImpl.postCreateAccount(accountCreateDTO);
        return ResponseEntity.ok("Request Completed");
    }

}
