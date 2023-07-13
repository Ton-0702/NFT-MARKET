package kits.final_project_api.Controller;

import kits.final_project_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("transaction") // /users
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/history/{nft_id}")
    @ResponseBody
    public List<?> getHistoryTransaction(@PathVariable Long nft_id){
//        List<Transaction> history = transactionService.getHistoryByIdNFT(nft_id);
//        System.out.println("history: "+history);
//        model.addAttribute("history", history);
        return transactionService.getHistoryByIdNFT(nft_id);
    }
}
