package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
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
    @Query(value = "SELECT a2.username, COUNT(cte.account_own) AS nfts_sold, SUM(cte.volume) AS volume FROM " +
            "( " +
            "SELECT a.username, t.nft_id, n.account_id AS account_own, ROUND(SUM(t.highest_bid),2) AS volume " +
            "FROM account AS a " +
            "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE('2023-11-07 11:01:22')) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, '2023-11-07 11:01:22') >=0 " +
            "GROUP BY a.username, t.nft_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            "LEFT JOIN account AS a2 ON cte.account_own = a2.account_id " +
            "GROUP BY a2.username", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorToday(String date);
}

//@Query(value = "SELECT a.avatar, a.account_name, a.username, t.nft_id, n.account_id AS account_own, t.account_id AS account_buy, ROUND(SUM(t.highest_bid),2) AS volume " +
//        "FROM account AS a " +
//        "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
//        "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
//        "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 " +
//        "GROUP BY a.username, t.nft_id " +
//        "HAVING MAX(t.highest_bid)", nativeQuery = true)