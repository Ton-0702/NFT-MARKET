package kits.final_project_api.Service;

import java.util.List;

import org.hibernate.mapping.Map;

public interface TransactionService {
    List<?> getHistoryByIdNFT(Long nft_id);
    List<?> getHistoryTransactionHighestBid(Long nft_id);
    void createBid(Long nft_id, Long account_id, Double highest_bid);
    void completeTransaction(Long nft_id);
}
