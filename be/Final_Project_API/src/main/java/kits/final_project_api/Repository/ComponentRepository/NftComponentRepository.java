package kits.final_project_api.Repository.ComponentRepository;

import kits.final_project_api.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface NftComponentRepository extends JpaRepository<Account, Long> {
    @Query(value = "SELECT n.account_id, t.nft_id, n.image, n.nft_name, n.price, MAX(t.highest_bid) AS highest_bid, COUNT(t.nft_id) AS trending " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON n.nft_id = t.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id ", nativeQuery = true)
    List<Map<String, Object>> getMaxTrendingNft(String dateAfterNow);

    @Query(value = "SELECT account_id, avatar, username FROM account", nativeQuery = true)
    List<Map<String, Object>> getAccount();

//    @Query(value = "SELECT t.nft_id, COUNT(t.nft_id) AS trending " +
//            "FROM transaction_bid AS t " +
//            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
//            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(\"2023-07-16\")) >0 " +
//            "GROUP BY t.nft_id", nativeQuery = true)
//    List<Map<String, Object>> getTrendingNFt();
}
