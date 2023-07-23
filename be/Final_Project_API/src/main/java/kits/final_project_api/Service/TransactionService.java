package kits.final_project_api.Service;

import java.util.List;

import org.hibernate.mapping.Map;

import kits.final_project_api.Model.PlaceBidDTO.PlaceBidDTO;

public interface TransactionService {
    List<java.util.Map<String, Object>> getHistoryByIdNFT(Long nft_id);
    List<java.util.Map<String, Object>> getHistoryByIdNFTHighestBid(Long nft_id);
    void placeBid(Long nft_id, Long account_id, Double highest_bid);
    void completeTransaction(Long nft_id);
}
