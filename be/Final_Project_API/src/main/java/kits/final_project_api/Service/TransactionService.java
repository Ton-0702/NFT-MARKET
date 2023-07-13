package kits.final_project_api.Service;

import java.util.List;

public interface TransactionService {
    List<?> getHistoryByIdNFT(Long nft_id);
}
