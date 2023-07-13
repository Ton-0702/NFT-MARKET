package kits.final_project_api.Service;

import kits.final_project_api.Entity.Transaction;
import kits.final_project_api.Model.TransactionDTO;

import java.util.List;

public interface TransactionService {
    List<?> getHistoryByIdNFT(Long nft_id);
}
