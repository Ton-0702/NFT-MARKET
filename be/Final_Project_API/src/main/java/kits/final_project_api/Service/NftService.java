package kits.final_project_api.Service;

import kits.final_project_api.Entity.NFT;

import java.util.List;
import java.util.Map;

public interface NftService {
    List<Map<String, Object>> GetAll();
    void CreateNft(NFT nft);
}
