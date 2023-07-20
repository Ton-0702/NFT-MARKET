package kits.final_project_api.Controller;


import Json.NftJson;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.NftService;
import kits.final_project_api.Service.impl.NftPage.NftPageServiceImpl;
import kits.final_project_api.Service.impl.NftServiceImpl;
import lombok.SneakyThrows;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;

@Controller
@CrossOrigin
@RequestMapping("nfts")  //đường dẫn là nfts
public class NftController {
    @Autowired
    private NftServiceImpl nftServiceImpl;

    @Autowired
    private NftPageServiceImpl nftPageServiceImpl;

    @GetMapping
    @ResponseBody
    public List<Map<String, Object>> getAllNfts(Model model) {
        List<Map<String, Object>> nfts = nftServiceImpl.GetAll();
        model.addAttribute("nfts", nfts);
        return nfts;
    }

    @PostMapping("/create")
    public ResponseEntity createNft(@Valid @RequestBody NFT nft) {
        nftServiceImpl.CreateNft(nft);
        return ResponseEntity.ok("Request completed");
    }

    //tạm bỏ
//    @GetMapping("/date-start-bid/{id}")
//    @ResponseBody
//    public String getDateStartBid(@PathVariable Integer id) {
//        String dateStartBid = nftPageServiceImpl.getDateStartBid(id);
//
//        return dateStartBid;
//    }

    @SneakyThrows
    @GetMapping("/date-start-end-bid/{id}")
    @ResponseBody
    public String getDateEndBid(@PathVariable Integer id) {
        String dateStartEndBid = nftPageServiceImpl.getDateStart_EndBid(id);
        String[] date = dateStartEndBid.split(",");


        String dateTimeStartBid = date[0];
        String dateTimeEndBid = date[1];
        System.out.println("date time start bid " + dateTimeStartBid);
        System.out.println("date time end bid " + dateTimeEndBid);

        String[] startBid = dateTimeStartBid.split(" ");
        String dateStartBid = startBid[0];
        String timeStartBid = startBid[1];

        String[] endBid = dateTimeEndBid.split(" ");
        String dateEndBid = endBid[0];
        String timeEndBid = endBid[1];


        Map<String, String> dateTimeBid = new HashMap<>();
        dateTimeBid.put("dateStartBid", dateStartBid);
        dateTimeBid.put("timeStartBid", timeStartBid);
        dateTimeBid.put("dateEndBid", dateEndBid);
        dateTimeBid.put("timeEndBid", timeEndBid);

        ObjectMapper objectMapper = new ObjectMapper();
        String jacksonData = objectMapper.writeValueAsString(dateTimeBid);

        System.out.println(jacksonData);

        return jacksonData;
    }

}
