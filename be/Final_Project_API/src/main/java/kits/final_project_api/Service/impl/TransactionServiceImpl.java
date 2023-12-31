package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Entity.Transaction;
import kits.final_project_api.Repository.TransactionRepository;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.NftOwenedService;
import kits.final_project_api.Service.NftService;
import kits.final_project_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private NftService nftService;
    @Autowired
    private NftOwenedService nftOwenedService;
    @Autowired
    private AccountService accountService;

    @Override
    public List<java.util.Map<String, Object>> getHistoryByIdNFT(Long nft_id) {
        // List<TransactionDTO> transactionDTO =null;
        // List<Transaction> history = new ArrayList<>();
        // history.addAll(transactionRepository.getHistoryByIdNFT(nft_id));
        return transactionRepository.getHistoryByIdNFT(nft_id);
    }

    @Override
    public List<java.util.Map<String, Object>> getHistoryTransactionHighestBid(Long nft_id) {
        return transactionRepository.getHistoryTransactionHighestBid(nft_id);
    }

    @Override
    public void createBid(Long nft_id, Long account_id, Double highest_bid) {
        try {
            LocalDateTime date_current = LocalDateTime.now().minusDays(1);
            DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String date_current_format = date_current.format(myFormatObj);
            Transaction transaction = new Transaction();
            transaction.setNft_id(nft_id);
            transaction.setAccount_id(account_id);
            transaction.setHighest_bid(highest_bid);
            transaction.setDate_transaction(date_current_format);
            transactionRepository.saveAndFlush(transaction);
        } catch (Exception e) {
            System.out.println("++++++++++++++++++++++++Error: " + e);
        }
    }

    @Override
    public void completeTransaction(Long nft_id) {
        try {
            List<Map<String, Object>> listHistory = getHistoryTransactionHighestBid(nft_id);
            Object account_id_obj = listHistory.get(0).get("account_id");
            Integer account_id_int = (Integer) account_id_obj;
            Long account_id = account_id_int.longValue(); // lấy account_id của người thắng bid
            NFT info_nft = nftService.getReferenceById(nft_id);
            System.out.println("+++++++++++++++ Info NFT: " + info_nft.getAccount_id() + account_id);
            Long account_nft_id = info_nft.getAccount_id().longValue(); // lấy account_id của người sở hữu NFT
            Long nft_owned_id = info_nft.getNft_id().longValue();
            Double price_nft = info_nft.getPrice();
            Object highest_bid_obj = listHistory.get(0).get("highest_bid");
            Double highest_bid = (Double) highest_bid_obj; // Lấy số tiền bid thắng của người thắng bid
            System.out.println("++++++++++ Highest bid: " + highest_bid);
            Account account_nft = accountService.getReferenceById(account_nft_id);
            System.out.println("+++++++++++++++++++++++++account_nft: "+account_nft);
            Double assetSeller = (Double) account_nft.getPrice(); // Lấy tài sản đang có của người sở hữu NFT
            Account account_bid_win = accountService.getReferenceById(account_id);
            Double assetBuyer = (Double) account_bid_win.getPrice(); // Lấy tài sản đang có của người thắng bid
            if (assetBuyer > highest_bid) {
                if (highest_bid > price_nft) {
                    System.out.println("++++++++++++++++ assetSeller: " + assetSeller + "++++++++++++++ assetBuyer: "
                            + assetBuyer);
                    nftOwenedService.CreateNftOwned(nft_owned_id, account_id, null); // Tạo NFT Owned
                    accountService.updateAssetById(account_nft_id, assetSeller + highest_bid); // cập nhật tài sản hiện
                                                                                               // tại của người sở hữu
                                                                                               // NFT
                    accountService.updateAssetById(account_id, assetBuyer - highest_bid); // cập nhật tài sản hiện tại
                                                                                          // của người thắng bid
                }
            }
        } catch (Exception e) {
            System.out.println("++++++++++++++++++++++++Error: " + e);
        }
    }
}
