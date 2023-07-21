package kits.final_project_api.Service.impl;

import kits.final_project_api.Repository.TransactionRepository;
import kits.final_project_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;


    @Override
    public List<?> getHistoryByIdNFT(Long nft_id) {
//        List<TransactionDTO> transactionDTO =null;
//        List<Transaction> history = new ArrayList<>();
//        history.addAll(transactionRepository.getHistoryByIdNFT(nft_id));
        return transactionRepository.getHistoryByIdNFT(nft_id);
    }
}
