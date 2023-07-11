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
    @Query(value = "SELECT a.avatar, a.username, COUNT(t.nft_id) AS nfts_sold " +
            "FROM account AS a " +
            "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 " +
            "GROUP BY a.username " +
            "HAVING MAX(t.highest_bid)", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorToday(String date);
}
//AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0

//"SELECT a.avatar, a.username, t.highest_bid " +
//        "FROM account AS a " +
//        "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
//        "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
//        "WHERE (DATEDIFF(DATE(t.date_transaction), DATE(n.date_end_bid)) <= 0 AND " +
//        "TIMESTAMPDIFF(SECOND, t.date_transaction, n.date_end_bid) >=0) " +
//        "AND (DATEDIFF(DATE(n.date_end_bid), :date) = 0 AND TIMESTAMPDIFF(SECOND, t.date_transaction, n.date_end_bid) >=0) "