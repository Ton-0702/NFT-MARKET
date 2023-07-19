package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.AccountCreateConnectWalletDTO;
import kits.final_project_api.Model.Response.RegisterResponseDto;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.Utils.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("api/check-address-wallet")
public class CheckAddressWallet {
    @Autowired
    private UtilsService utilsService;

    @Autowired
    private AccountService accountService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public Boolean CheckAddressWallet(@Valid @RequestBody AccountCreateConnectWalletDTO accountCreateConnectWalletDTO, HttpServletResponse response) {
        Account account_create = new Account();

        account_create.setAddress_wallet(accountCreateConnectWalletDTO.getAddress_wallet());

        // kiểm tra có trùng address wallet không
        Account foundAccountAddressWallet = accountService.findByAddressWallet(accountCreateConnectWalletDTO.getAddress_wallet());
        if(foundAccountAddressWallet == null){
            accountService.saveAndFlush(account_create);
            return true;
        }else{
            return false;
        }
    }
}
