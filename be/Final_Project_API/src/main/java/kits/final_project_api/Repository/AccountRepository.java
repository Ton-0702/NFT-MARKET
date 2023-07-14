package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.Followers;
import kits.final_project_api.Model.TopCreatorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
//    void flush();
//    @Query(value = "SELECT a.avatar, a.username, t.highest_bid FROM account AS a INNER JOIN transaction_bid AS t ON t.account_id = a.account_id INNER JOIN nft AS n ON n.nft_id = t.nft_id WHERE DATEDIFF(DATE(t.date_transaction), DATE(n.date_end_bid)) <= 0 AND TIMESTAMPDIFF(SECOND, t.date_transaction, n.date_end_bid) >=0", nativeQuery = true)
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

//    List<Account> findByUsernameAndAccountId(String userName);
//    List<Followers> findByFollowers();
}

//@Query(value = "SELECT a.avatar, a.account_name, a.username, t.nft_id, n.account_id AS account_own, t.account_id AS account_buy, ROUND(SUM(t.highest_bid),2) AS volume " +
//        "FROM account AS a " +
//        "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
//        "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
//        "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 " +
//        "GROUP BY a.username, t.nft_id " +
//        "HAVING MAX(t.highest_bid)", nativeQuery = true)