package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.Followers;
import kits.final_project_api.Model.TopCreatorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

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


//    List<Account> findByUsernameAndAccountId(String userName);
//    List<Followers> findByFollowers();
}
