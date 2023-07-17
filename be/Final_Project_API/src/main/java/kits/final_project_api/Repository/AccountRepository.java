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
    @Query(value = "SELECT a.username, COUNT(cte2.nfts_sold) AS nfts_sold, ROUND(SUM(cte2.volume), 2) AS volume FROM ( " +
                "SELECT account_own AS creator, nfts_sold, volume FROM ( " +
                    "SELECT n.account_id AS account_own, t.account_id AS account_buy,  COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume " +
                    "FROM transaction_bid AS t " +
                    "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
                    "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 " +
                    "GROUP BY t.nft_id, t.account_id " +
                    "HAVING MAX(t.highest_bid) " +
                ") cte " +
                "UNION " +
                "SELECT account_buy, nfts_sold, volume FROM ( " +
                    "SELECT n.account_id AS account_own, t.account_id AS account_buy, COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume " +
                    "FROM transaction_bid AS t "+
                    "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
                    "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 " +
                    "GROUP BY t.nft_id, t.account_id " +
                    "HAVING MAX(t.highest_bid) " +
                    ") cte " +
            ") cte2 " +
            "LEFT JOIN account AS a ON cte2.creator = a.account_id " +
            "GROUP BY cte2.creator", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorToday(String date);

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
