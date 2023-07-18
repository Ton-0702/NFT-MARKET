package kits.final_project_api.Repository.NftPage;

import kits.final_project_api.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface NftPageRepository  extends JpaRepository<Transaction, Long> {
    @Query(value = "Select date_start_bid, date_end_bid from nft where nft_id=:id",nativeQuery = true)
    String getDateStart_EndBid(Integer id);
//    @Query(value = "Select date_end_bid from nft where nft_id=:id",nativeQuery = true)
//    String getDateEndBid(Integer id);
}
