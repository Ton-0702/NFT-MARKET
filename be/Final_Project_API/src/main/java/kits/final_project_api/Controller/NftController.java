package kits.final_project_api.Controller;


import Json.NftJson;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.NftService;
import kits.final_project_api.Service.impl.NftServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;

@Controller
@CrossOrigin
@RequestMapping("nfts")  //đường dẫn là nfts
public class NftController {
    @Autowired
    private NftServiceImpl nftServiceImpl;

    @GetMapping
    @ResponseBody
    public List<Map<String, Object>> getAllNfts(Model model) {
        List<Map<String, Object>> nfts = nftServiceImpl.GetAll();
        model.addAttribute("nfts", nfts);
        return nfts;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createNft(@Valid @RequestBody NFT nft) {
//        NFT nft = new NFT();
//        nft.setId(nftJson.getNft_id());
//        nft.getNft_name();
//        nft.getImage();
//        nft.getPrice();
//        nft.getDescription();
//        nft.getDate_create();
//        nft.setDate_start_bid(nft.getDate_start_bid());
//        nft.setDate_end_bid(nft.getDate_end_bid());
//        nft.setAccount(nftJson.getAccount_id());

        nftServiceImpl.CreateNft(nft);
        return ResponseEntity.ok(nft);


//        return (ResponseEntity<?>) nfts;
    }
}
