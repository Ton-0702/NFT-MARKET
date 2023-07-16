package kits.final_project_api.Service;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.CreateAccount.AccountCreateDTO;

import java.util.List;
import java.util.Map;

//@Service
public interface AccountService {
    List<Account> findAll();
    List<Map<String, Object>> getTopCreatorToday(String date);
    Account findByUsername(String username);

    <S extends Account> S saveAndFlush(S entity);

    int updateTokenById(String token, Long id);

    Account findByToken(String token);
}
