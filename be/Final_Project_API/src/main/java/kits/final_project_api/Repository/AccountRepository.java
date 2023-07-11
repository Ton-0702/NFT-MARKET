package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.TopCreatorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
//    void flush();
//    @Query(value = "SELECT a.avatar, a.username, t.highest_bid FROM account AS a INNER JOIN transaction_bid AS t ON t.account_id = a.account_id INNER JOIN nft AS n ON n.nft_id = t.nft_id WHERE (DATEDIFF(DATE(n.date_end_bid), DATE(t.date_transaction)) <= 0 AND (TIMEDIFF(TIME(n.date_end_bid), TIME(t.date_transaction)) = '00:00:00' OR SUBSTRING(TIMEDIFF(TIME(n.date_end_bid), TIME(t.date_transaction)), 1, 1) = '-' ))", nativeQuery = true)
    @Query(value = "SELECT a.avatar, a.username, t.highest_bid " +
            "FROM account AS a " +
            "INNER JOIN transaction_bid AS t ON t.account_id = a.account_id " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE (DATEDIFF(DATE(n.date_end_bid), DATE(t.date_transaction)) <= 0 AND (TIMEDIFF(TIME(n.date_end_bid), TIME(t.date_transaction)) = '00:00:00' OR SUBSTRING(TIMEDIFF(TIME(n.date_end_bid), TIME(t.date_transaction)), 1, 1) = '-' )) AND DATEDIFF(DATE(n.date_end_bid), :date) ", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorToday(LocalDate date);
}
