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
    @Autowired
    private TransactionServiceImpl transactionServiceImpl;

    @GetMapping("/history/{nft_id}")
    @ResponseBody
    public List<?> getHistoryTransaction(@PathVariable Long nft_id){
//        List<Transaction> history = transactionService.getHistoryByIdNFT(nft_id);
//        System.out.println("history: "+history);
//        model.addAttribute("history", history);
        return transactionService.getHistoryByIdNFT(nft_id);
    }

    @PostMapping("/create")
    public ResponseEntity placeBid(@RequestBody Long nft_id, Long account_id, Double highest_bid){
        transactionServiceImpl.placeBid(nft_id,account_id,highest_bid);
        return ResponseEntity.ok("Request completed");
    }
}
