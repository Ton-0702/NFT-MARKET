package kits.final_project_api.Repository.HomePage;

import kits.final_project_api.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface HomePageRepository extends JpaRepository<Transaction, Long> {

    @Query(value = "SELECT t.nft_id, MAX(t.highest_bid) AS max " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) <=0 " +
            "GROUP BY t.nft_id ", nativeQuery = true)
    List<Map<String, Object>> getTransaction(String dateAfterNow);

    @Query(value = "SELECT COUNT(*) AS auctions FROM transaction_bid", nativeQuery = true)
    Integer getTotalAuctions();

    @Query(value = "SELECT COUNT(*) AS artists FROM account", nativeQuery = true)
    Integer getTotalAccount();


    // Get top creator All time
    @Query(value = "SELECT account_id, username, avatar FROM account", nativeQuery = true)
    List<Map<String, Object>> getInfoAccount();

    @Query(value = "SELECT n.account_id, MAX(t.highest_bid) AS total_sale " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) <=0 " +
            "GROUP BY t.nft_id ", nativeQuery = true)
    List<Map<String, Object>> getMaxTransactionByNftId(String dateAfterNow);


//     Trending Collection
    @Query(value = "SELECT n_o.account_id, n_o.collection_id, c.collection_name, COUNT(*) AS trending_collection " +
            "FROM nft_owned AS n_o " +
            "INNER JOIN collection AS c ON n_o.collection_id = c.collection_id " +
            "GROUP BY n_o.account_id, n_o.collection_id", nativeQuery = true)
    List<Map<String, Object>> getTotalCollectionAccount();

    @Query(value = "SELECT n.image, n_o.collection_id " +
            "FROM nft_owned AS n_o " +
            "INNER JOIN nft AS n ON n_o.nft_owned_id = n.nft_id ", nativeQuery = true)
    List<Map<String, Object>> getCollectionImage();
}
