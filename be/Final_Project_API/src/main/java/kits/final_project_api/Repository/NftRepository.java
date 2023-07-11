package kits.final_project_api.Repository;

import kits.final_project_api.Entity.NFT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Repository
public interface NftRepository extends JpaRepository<NFT,Long> {
//    @Query(value = "SELECT nft.nft_id,nft.nft_name, nft.image, nft.price,nft.description "
//            +"from  nft AS nft",nativeQuery = true);
//    @Query(value = "SELECT nft_id,nft_name, image, price,description from  nft ",nativeQuery = true);
    @Query(value = "SELECT nft_name,image,price FROM nft", nativeQuery = true)
    List<Map<String, Object>> GetAll();

    @Query(value = "INSERT INTO nft (nft_id, nft_name, image, price, description, date_create, date_start_bid, date_end_bid, account_id) values (12, 'l', 'a', 57.17, 'sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate', '2023/4/7 08:35:22', '2023/4/7 08:35:22', '2023/4/8 08:35:22', 7)",nativeQuery = true)
    List<Map<String, Object>> CreateNft();
}


