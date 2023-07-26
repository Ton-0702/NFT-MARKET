package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query(value = "SELECT n.nft_name,a.account_id, a.username, a.avatar, t.highest_bid, REPLACE(t.date_transaction, 'T', '') AS date_transaction " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "INNER JOIN account AS a ON t.account_id = a.account_id " +
            "WHERE n.nft_id = :nft_id ORDER BY t.highest_bid DESC", nativeQuery = true)
    List<Map<String, Object>> getHistoryByIdNFT(@Param("nft_id") Long nft_id);

    @Query(value = "SELECT n.nft_name,a.account_id, a.username, a.avatar, t.highest_bid, REPLACE(t.date_transaction, 'T', '') AS date_transaction " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "INNER JOIN account AS a ON t.account_id = a.account_id " +
            "WHERE n.nft_id = :nft_id ORDER BY t.highest_bid DESC LIMIT 1", nativeQuery = true)
    List<Map<String, Object>> getHistoryTransactionHighestBid(@Param("nft_id") Long nft_id);
}
