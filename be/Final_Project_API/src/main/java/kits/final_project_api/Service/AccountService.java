package kits.final_project_api.Service;

import kits.final_project_api.Entity.Account;

import java.util.List;

//@Service
public interface AccountService {
    List<Account> findAll();

    Account getReferenceById(Long nft_id);

    Account findByUsername(String username);

    <S extends Account> S saveAndFlush(S entity);

    int updateTokenById(String token, Long id);

    Account findByToken(String token);

    Account findByAddressWallet(String wallet);

    Account findByEmail(String email);
}
