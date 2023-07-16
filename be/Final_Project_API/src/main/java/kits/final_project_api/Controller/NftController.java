package kits.final_project_api.Controller;


import Json.NftJson;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.NftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;
@Controller
@RequestMapping("nfts")  //đường dẫn là nfts
public class NftController {
    @Autowired
    private NftService nftService;

    @GetMapping
    @ResponseBody
    public List<Map<String, Object>> getAllNfts(Model model){
        List<Map<String, Object>> nfts=nftService.GetAll();
        model.addAttribute("nfts", nfts);
        return nfts;
    }

//    @PostMapping("/create")
//    public ResponseEntity<?> createNft(@RequestBody NftJson nftJson){
//        NFT nft=new NFT();
//        nft.setId(nftJson.getNft_id());
//
//    }
}
