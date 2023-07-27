package kits.final_project_api.Repository;

import kits.final_project_api.Entity.NFTOwened;
import org.hibernate.annotations.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Map;

@Repository
public interface NftOwenedRepository extends JpaRepository<NFTOwened, Long> {
    @Transactional
    @Modifying
    @Query(value= "INSERT INTO nft_owned(nft_owned_id, account_id, collection_id) VALUES(:nft_id, :account_id, :collection_id)", nativeQuery = true)
    void CreateNftOwned(Long nft_id, Long account_id, Long collection_id);
    // @Modifying 
    // @Query(value = "")
}
