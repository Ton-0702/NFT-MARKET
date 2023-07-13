package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.AccountCreateConnectWalletDTO;
import kits.final_project_api.Model.CreateAccount.AccountCreateDTO;
import kits.final_project_api.Model.CreateAccount.AccountMetaMaskDto;
import kits.final_project_api.Repository.PostAccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PostAccountServiceImpl {
    @Autowired
    private PostAccountRepository postAccountRepository;


    public void postMetaMask(AccountMetaMaskDto accountMetaMaskDto) {
        Account account = new Account();
        account.setAddress_wallet(accountMetaMaskDto.getAddress_wallet());
        account.setUsername(accountMetaMaskDto.getUsername());
        account.setPassword(accountMetaMaskDto.getPassword());
        account.setToken(accountMetaMaskDto.getToken());
        postAccountRepository.save(account);

    }

    public void postCreateAccount(AccountCreateDTO accountCreateDTO){
        Account accountCreateAccount = new Account();
        accountCreateAccount.setUsername(accountCreateDTO.getUsername());
        accountCreateAccount.setEmail(accountCreateDTO.getEmail());
        accountCreateAccount.setPassword(accountCreateDTO.getPassword());
        postAccountRepository.save(accountCreateAccount);
    }

    public void postCreateAccountConnectWallet(AccountCreateConnectWalletDTO accountCreateConnectWalletDTO){
        Account accountCreateConnectWallet = new Account();
        accountCreateConnectWallet.setAddress_wallet(accountCreateConnectWalletDTO.getAddress_wallet());
        accountCreateConnectWallet.setToken(accountCreateConnectWalletDTO.getToken());
        postAccountRepository.save(accountCreateConnectWallet);
    }
}
