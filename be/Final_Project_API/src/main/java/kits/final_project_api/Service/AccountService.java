package kits.final_project_api.Service;

import kits.final_project_api.Entity.Account;

import java.util.List;

//@Service
public interface AccountService {
    List<Account> findAll();

//    default List<Account> getAllAccount() {
//        List<Account> accounts = accountRepository.getAllAccounts();
//        System.out.println("ACCOUNT: " + accounts);
//        return accounts;
//
//
//
//    }

//    <S extends Account> S saveAndFlush(S entity);

}
