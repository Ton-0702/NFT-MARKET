package kits.final_project_api.Service;

import kits.final_project_api.Entity.NFT;

import java.util.List;
import java.util.Map;

import jakarta.validation.Valid;

public interface NftService {
    List<Map<String, Object>> GetAll();

    void CreateNft(@Valid String nft_name, String image, Double price, String description, String date_start_bid,
            String date_end_bid);
}
