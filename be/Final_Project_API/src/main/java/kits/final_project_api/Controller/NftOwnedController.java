package kits.final_project_api.Controller;

import kits.final_project_api.Service.NftOwnedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("nftOwned") // /users
public class NftOwnedController {

    @Autowired
    private NftOwnedService nftService;

    @PostMapping("/createNftOwned")
    public ResponseEntity createNftOwned(@Valid @RequestParam("account_owned_id") Long account_owned_id, @RequestParam("account_id") Long account_id, @RequestParam("collection_id") Long collection_id) {
        nftService.createNftOwned(account_owned_id, account_id, collection_id);
        return ResponseEntity.ok("Request completed");
    }
}