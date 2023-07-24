package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Repository.AccountRepository;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> findAll() {
        return accountRepository.findAll();
    }

//    @Override
//    public List<Map<String, Object>> getTopCreatorToday(String date) {
//        return accountRepository.getTopCreatorToday(date);
//    }

    @Override
    public Account findByUsername(String username) {

        return accountRepository.findByUsername(username);
    }

    @Override
    public <S extends Account> S saveAndFlush(S entity) {
//        Account accountCreateAccount = new Account();
//        accountCreateAccount.setUsername(accountCreateDTO.getUsername());
//        accountCreateAccount.setEmail(accountCreateDTO.getEmail());
//        accountCreateAccount.setPassword(accountCreateDTO.getPassword());
        return accountRepository.saveAndFlush(entity);
    }

    @Override
    public int updateTokenById(String token, Long id) {
        return accountRepository.updateTokenById(token, id);
    }

    @Override
    public Account findByToken(String token) {
        return accountRepository.findByToken(token);
    }

    @Override
    public List<Map<String, Object>> findByTokenList(String token) {
        return accountRepository.findByTokenList(token);
    }

    @Override
    public Account findByAddressWallet(String wallet) {
        return accountRepository.findByAddressWallet(wallet);
    }

    @Override
    public Account findByEmail(String email) {

        return accountRepository.findByEmail(email);
    }
}
