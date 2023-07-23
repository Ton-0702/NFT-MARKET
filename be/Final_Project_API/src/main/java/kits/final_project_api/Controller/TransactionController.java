package kits.final_project_api.Controller;

import kits.final_project_api.Model.PlaceBidDTO.PlaceBidDTO;
import kits.final_project_api.Service.TransactionService;
import kits.final_project_api.Service.impl.TransactionServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("transaction") // /users
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/history/{nft_id}")
    @ResponseBody
    public List<?> getHistoryTransaction(@PathVariable Long nft_id) {
        return transactionService.getHistoryByIdNFT(nft_id);
    }

    @GetMapping("/historyHighestBid/{nft_id}")
    @ResponseBody
    public List<?> getHistoryByIdNFTHighestBid(@PathVariable Long nft_id) {
        return transactionService.getHistoryByIdNFTHighestBid(nft_id);
    }

    @PostMapping("/create")
    public ResponseEntity placeBid(@Valid @RequestParam("nft_id") Long nft_id,
            @RequestParam("account_id") Long account_id, @RequestParam("highest_bid") Double highest_bid) {
        transactionService.placeBid(nft_id, account_id, highest_bid);
        return ResponseEntity.ok("Request completed");
    }

    @PostMapping("/complete-transaction")
    public ResponseEntity completeTransaction(@Valid @RequestParam("nft_id") Long nft_id) {
        transactionService.completeTransaction(nft_id);
        return ResponseEntity.ok("Request completed");
    }
}
