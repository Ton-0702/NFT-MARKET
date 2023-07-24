package kits.final_project_api.Repository.NftPage;

import kits.final_project_api.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface NftPageRepository extends JpaRepository<Transaction, Long> {
    @Query(value = "Select date_start_bid, date_end_bid from nft where nft_id=:id", nativeQuery = true)
    String getDateStart_EndBid(Integer id);
//    @Query(value = "Select date_end_bid from nft where nft_id=:id",nativeQuery = true)
//    String getDateEndBid(Integer id);

    @Query(value = "select * " +
            "from nft as n inner join account as acc on n.account_id=acc.account_id where n.nft_id=:id ", nativeQuery = true)
    List<Map<String, Object>> getNftAndUser_Info(Integer id);

    @Query(value = "select * from classify_category as cc inner join categories as c on cc.categories_id=c.categories_id where cc.nft_id=:id", nativeQuery = true)
    List<Map<String, Object>> getClassifyAndCategory_Info(Integer id);

    @Query(value = "Select date_create from nft where nft_id=:id", nativeQuery = true)
    String getDateCreate(Integer id);

    @Query(value = "select * from nft where nft_name like %:name% limit 100", nativeQuery = true)
    List<Map<String, Object>> getNftInfoByName(String name);

    @Query(value = "select n.nft_id, n.nft_name, n.image, n.price, acc.username, acc.avatar from nft as n inner join account as acc on n.account_id = acc.account_id limit 12", nativeQuery = true)
    List<Map<String, Object>> getNftAndAccountInfo();

    @Query(value = "SELECT nft_id,MAX(highest_bid) AS highest_bid\n" +
            "FROM transaction_bid\n" +
            "GROUP BY nft_id;", nativeQuery = true)
    List<Map<String, Object>> getTransactionInfo();

}
