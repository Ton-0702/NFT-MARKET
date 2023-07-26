package kits.final_project_api.Controller;

import kits.final_project_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
    public List<?> getHistoryTransactionHighestBid(@PathVariable Long nft_id) {
        return transactionService.getHistoryTransactionHighestBid(nft_id);
    }

    @PostMapping("/create")
    public void createBid(@RequestParam("nft_id") Long nft_id, @RequestParam("account_id") Long account_id,
            @RequestParam("highest_bid") Double highest_bid) {
        transactionService.createBid(nft_id, account_id, highest_bid);
    }

    @PostMapping("/complete-transaction")
    public ResponseEntity  completeTransaction(@RequestParam("nft_id") Long nft_id){
        transactionService.completeTransaction(nft_id);
        return ResponseEntity.ok("Request completed");
    }
}
