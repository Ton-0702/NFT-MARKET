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


}
