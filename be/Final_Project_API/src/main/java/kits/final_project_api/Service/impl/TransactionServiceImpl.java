package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Entity.Transaction;
import kits.final_project_api.Model.PlaceBidDTO.PlaceBidDTO;
import kits.final_project_api.Repository.AccountRepository;
import kits.final_project_api.Repository.NftRepository;
import kits.final_project_api.Repository.TransactionRepository;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.NftOwnedService;
import kits.final_project_api.Service.NftService;
import kits.final_project_api.Service.TransactionService;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private NftRepository nftRepository;
    @Autowired
    NftService nftService;
    @Autowired
    AccountService accountService;
    @Autowired
    NftOwnedService nftOwnedService;

    @Override
    public List<java.util.Map<String, Object>> getHistoryByIdNFT(Long nft_id) {
        // List<TransactionDTO> transactionDTO =null;
        // List<Transaction> history = new ArrayList<>();
        // history.addAll(transactionRepository.getHistoryByIdNFT(nft_id));
        return transactionRepository.getHistoryByIdNFT(nft_id);
    }

    @Override
    public List<java.util.Map<String, Object>> getHistoryByIdNFTHighestBid(Long nft_id) {
        // List<TransactionDTO> transactionDTO =null;
        // List<Transaction> history = new ArrayList<>();
        // history.addAll(transactionRepository.getHistoryByIdNFT(nft_id));
        return transactionRepository.getHistoryByIdNFTHighestBid(nft_id);
    }

    @Override
    public void placeBid(Long nft_id, Long account_id, Double highest_bid) {
        try {
            LocalDateTime date_current = LocalDateTime.now().minusDays(1);
            DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String date_current_format = date_current.format(myFormatObj);
            Transaction transaction = new Transaction();
            transaction.setNft_id(nft_id);
            transaction.setAccount_id(account_id);
            transaction.setHighest_bid(highest_bid);
            transaction.setDate_transaction(date_current_format);
            transactionRepository.save(transaction);
        } catch (Exception e) {
            System.out.println("++++++++++++++++++++++++Error: " + e);
        }

    }

    @Override
    public void completeTransaction(Long nft_id) {
        List<java.util.Map<String, Object>> listHistory = getHistoryByIdNFTHighestBid(nft_id);
        Object account_id_obj = listHistory.get(0).get("account_id");
        Integer account_id_int = (Integer) account_id_obj;
        Long account_id = account_id_int.longValue();
        NFT info_nft = nftService.getReferenceById(nft_id);
        System.out.println("+++++++++++++++ Info NFT: " + info_nft.getAccount_id() + account_id);
        Long account_owned_id = info_nft.getAccount_id().longValue();
        nftOwnedService.createNftOwned(account_owned_id,account_id, null);
        // nftRepository.updateNFTOwner(nft_id, account_id);
    }
}
