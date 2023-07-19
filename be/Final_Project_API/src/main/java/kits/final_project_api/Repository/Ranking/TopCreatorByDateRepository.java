package kits.final_project_api.Repository.Ranking;

import kits.final_project_api.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface TopCreatorByDateRepository extends JpaRepository<Transaction, Long> {
    @Query(value = "SELECT a.account_id, a.avatar, a.username, COUNT(cte2.nfts_sold) AS nfts_sold, ROUND(SUM(cte2.volume), 2) AS volume "
            +
            "FROM ( " +
            "SELECT account_own AS creator, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy,  COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume "
            +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 "
            +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            "UNION " +
            "SELECT account_buy, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy, COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume "
            +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:date)) = 0 AND TIMESTAMPDIFF(SECOND, n.date_end_bid, :date) >=0 "
            +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            ") cte2 " +
            "LEFT JOIN account AS a ON cte2.creator = a.account_id " +
            "GROUP BY cte2.creator " +
            "ORDER BY COUNT(cte2.nfts_sold) DESC, ROUND(SUM(cte2.volume), 2) DESC " +
            "LIMIT 10 OFFSET :offset  ", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorToday(String date, Integer offset);

    @Query(value = "SELECT a.account_id, a.avatar, a.username, COUNT(cte2.nfts_sold) AS nfts_sold, ROUND(SUM(cte2.volume), 2) AS volume "
            +
            "FROM ( " +
            "SELECT account_own AS creator, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy,  COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume "
            +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            "UNION " +
            "SELECT account_buy, nfts_sold, volume FROM ( " +
            "SELECT n.account_id AS account_own, t.account_id AS account_buy, COUNT(n.account_id) AS nfts_sold, MAX(t.highest_bid) AS volume "
            +
            "FROM transaction_bid AS t " +
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            ") cte2 " +
            "LEFT JOIN account AS a ON cte2.creator = a.account_id " +
            "GROUP BY cte2.creator " +
            "ORDER BY COUNT(cte2.nfts_sold) DESC, ROUND(SUM(cte2.volume), 2) DESC " +
            "LIMIT 10 OFFSET :offset ", nativeQuery = true)
    List<Map<String, Object>> getTopCreatorAllTime(String dateAfterNow, Integer offset);


    @Query(value = "SELECT COUNT(*) AS total_user " +
            "FROM (" +
            "SELECT a.account_id " +
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
            "FROM transaction_bid AS t "+
            "INNER JOIN nft AS n ON t.nft_id = n.nft_id " +
            "WHERE DATEDIFF(DATE(n.date_end_bid), DATE(:dateAfterNow)) >0 " +
            "GROUP BY t.nft_id, t.account_id " +
            "HAVING MAX(t.highest_bid) " +
            ") cte " +
            ") cte2 " +
            "LEFT JOIN account AS a ON cte2.creator = a.account_id " +
            "GROUP BY cte2.creator) cte3 " , nativeQuery = true)
    Map<String, Object> getCountTopCreatorAllTime(String dateAfterNow);
}

