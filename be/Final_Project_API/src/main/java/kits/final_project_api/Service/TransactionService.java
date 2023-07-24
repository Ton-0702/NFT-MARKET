package kits.final_project_api.Service;

import java.util.List;

import org.hibernate.mapping.Map;

import kits.final_project_api.Model.PlaceBidDTO.PlaceBidDTO;

public interface TransactionService {
    List<?> getHistoryByIdNFT(Long nft_id);
}
