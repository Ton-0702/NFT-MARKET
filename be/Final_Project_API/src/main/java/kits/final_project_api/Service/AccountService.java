package kits.final_project_api.Service;

import kits.final_project_api.Entity.Account;

import java.util.List;
import java.util.Map;

//@Service
public interface AccountService {
    List<Account> findAll();

    Account getReferenceById(Long nft_id);

    Account findByUsername(String username);

    <S extends Account> S saveAndFlush(S entity);

    int updateTokenById(String token, Long id);

    Account findByToken(String token);

    List<Map<String, Object>> findByTokenList(String token);

    Account findByAddressWallet(String wallet);

    Account findByEmail(String email);

    void updateAssetById(Long account_id, Double price);
}
