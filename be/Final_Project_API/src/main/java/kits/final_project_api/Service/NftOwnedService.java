package kits.final_project_api.Service;

import jakarta.validation.Valid;
import kits.final_project_api.Entity.NFTOwned;

public interface NftOwnedService {
    <S extends NFTOwned> S saveAndFlush(S entity);
    void createNftOwned(@Valid Long account_owned_id , Long account_id, Long collection_id);
}
