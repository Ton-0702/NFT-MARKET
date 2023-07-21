package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Entity.Transaction;
import kits.final_project_api.Model.PlaceBidDTO.PlaceBidDTO;
import kits.final_project_api.Repository.AccountRepository;
import kits.final_project_api.Repository.NftRepository;
import kits.final_project_api.Repository.TransactionRepository;
import kits.final_project_api.Service.TransactionService;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private NftRepository nftRepository;
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<?> getHistoryByIdNFT(Long nft_id) {
        // List<TransactionDTO> transactionDTO =null;
        // List<Transaction> history = new ArrayList<>();
        // history.addAll(transactionRepository.getHistoryByIdNFT(nft_id));
        return transactionRepository.getHistoryByIdNFT(nft_id);
    }

    @Override
    public void placeBid(Long nft_id, Long account_id, Double highest_bid) {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        NFT nft = nftRepository.getById(nft_id);
        System.out.println("nft++++++++++++++++++++++++++: " +nft);
        Account account = accountRepository.getById(account_id);
        System.out.println("nft:"+ nft.getImage());
        System.out.println("account:"+ account);
        PlaceBidDTO placeBidDTO = new PlaceBidDTO();
        placeBidDTO.setUsername(account.getUsername());
        placeBidDTO.setBid_price(highest_bid);
        placeBidDTO.setAvatar(account.getAvatar());
        placeBidDTO.setDate_create(date_current_format);
        System.out.println(placeBidDTO);
    }
}
