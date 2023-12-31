package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    @Query(value = "SELECT * FROM account AS a WHERE a.username = :username LIMIT 1", nativeQuery = true)
    Account findByUsername(String username);

    @Query(value = "SELECT * FROM account AS a WHERE a.email = :email LIMIT 1", nativeQuery = true)
    Account findByEmail(String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE account AS a SET a.token = :token WHERE a.account_id = :account_id", nativeQuery = true)
    int updateTokenById(@Param("token") String token, @Param("account_id") Long account_id);

    @Query(value = "SELECT * FROM account AS a WHERE a.token = :token ", nativeQuery = true)
    Account findByToken(@Param("token") String token);

    @Query(value = "SELECT * FROM account AS a WHERE a.token = :token ", nativeQuery = true)
    List<Map<String, Object>> findByTokenList(@Param("token") String token);

    @Query(value = "SELECT * FROM account AS a WHERE a.address_wallet = :wallet ", nativeQuery = true)
    Account findByAddressWallet(String wallet);

    @Modifying
    @Transactional
    @Query(value = "UPDATE account AS a SET a.price = :price WHERE a.account_id = :account_id", nativeQuery = true)
    void updateAssetById(Long account_id, Double price);
//    List<Account> findByUsernameAndAccountId(String userName);
//    List<Followers> findByFollowers();
}
