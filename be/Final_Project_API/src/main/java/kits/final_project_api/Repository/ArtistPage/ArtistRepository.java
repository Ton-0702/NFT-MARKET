package kits.final_project_api.Repository.ArtistPage;

import kits.final_project_api.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ArtistRepository extends JpaRepository<Account, Long> {
    @Query(value = "SELECT a.account_id, a.avatar, a.username, a.biography, COUNT(cte2.nfts_sold) AS nfts_sold, ROUND(SUM(cte2.volume), 2) AS volume " +
            "FROM ( " +
            "SELECT account_own AS creator, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy,  COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            "UNION " +
            "SELECT account_buy, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy, COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume " +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            ") cte2 " +
            "RIGHT JOIN account AS a ON a.account_id = cte2.creator " +
            "GROUP BY a.account_id " +
            "HAVING a.account_id = :account_id ", nativeQuery = true)
    List<Map<String, Object>> getDetailArtist(String dateAfterNow, Integer account_id);

    @Query(value = "SELECT f.user_id, COUNT(*) AS followers " +
            "FROM account AS a " +
            "INNER JOIN followers AS f ON a.account_id = f.user_id " +
            "GROUP BY f.user_id ", nativeQuery = true)
    List<Map<String, Object>> getFollower();

}
