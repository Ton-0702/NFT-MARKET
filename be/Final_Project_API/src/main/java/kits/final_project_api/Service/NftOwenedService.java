package kits.final_project_api.Service;

import org.springframework.data.repository.query.Param;

import jakarta.validation.Valid;
import kits.final_project_api.Entity.NFTOwened;

public interface NftOwenedService {
    <S extends NFTOwened> S saveAndFlush(S entity);
    void CreateNftOwned(Long nft_id,  Long account_id, Long collection_id);
    // void createNftOwned( Long account_owned_id , Long account_id, Long collection_id);
}
