package kits.final_project_api.Service;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.TopCreatorDTO;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;

//@Service
public interface AccountService {
    List<Account> findAll();
    List<Map<String, Object>> getTopCreatorToday(LocalDate date);
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
