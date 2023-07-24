package kits.final_project_api.Repository;

import kits.final_project_api.Entity.NFT;
import org.hibernate.annotations.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Repository
public interface NftRepository extends JpaRepository<NFT, Long> {
    // @Query(value = "SELECT nft.nft_id,nft.nft_name, nft.image,
    // nft.price,nft.description "
    // +"from nft AS nft",nativeQuery = true);
    // @Query(value = "SELECT nft_id,nft_name, image, price,description from nft
    // ",nativeQuery = true);
    @Query(value = "SELECT * FROM nft limit 5", nativeQuery = true)
    List<Map<String, Object>> GetAll();

    // code insert into chay dc
    // @Query(value = "INSERT INTO nft (nft_name, image, price, description,
    // date_create, date_start_bid, date_end_bid, account_id) " +
    // "values (:nft_name, :image, :price, :description, :date_create,
    // :date_start_bid, :date_end_bid, :account_id)", nativeQuery = true)
    
    // void createNft(@Param("nft_name") String nft_name
    // , @Param("image") String image, @Param("price") Double price,
    // @Param("description") String description,
    // @Param("date_create") String date_create, @Param("date_start_bid") String
    // date_start_bid,
    // @Param("date_end_bid") String date_end_bid,@Param("account_id") Integer
    // account_id);
}
