package kits.final_project_api.Controller.Authentication;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.CheckAddressWalletDTO;
import kits.final_project_api.Model.CreateAccount.WalletRequestDTO;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.Utils.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<WalletRequestDTO> CheckAddressWallet(@Valid @RequestBody CheckAddressWalletDTO checkAddressWalletDTO, HttpServletResponse response) {
        Account account_create = new Account();

        System.out.println("checkAddressWalletDTO.getAddress_wallet(): "+checkAddressWalletDTO.getAddress_wallet());
        account_create.setAddress_wallet(checkAddressWalletDTO.getAddress_wallet());

        // kiểm tra có trùng address wallet không
        Account foundAccountAddressWallet = accountService.findByAddressWallet(checkAddressWalletDTO.getAddress_wallet());

        if(foundAccountAddressWallet == null){
            return ResponseEntity.status(HttpStatus.OK).body(new WalletRequestDTO(account_create.getAddress_wallet(), "Address_Not_Exist"));
        }else{

            return ResponseEntity.status(HttpStatus.OK).body(new WalletRequestDTO("Exist", "Address_Wallet_Exist"));
        }
    }
}
