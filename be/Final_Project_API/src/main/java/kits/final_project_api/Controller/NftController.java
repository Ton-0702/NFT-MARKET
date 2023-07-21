package kits.final_project_api.Controller;


import Json.NftJson;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.validation.Valid;
import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Service.AccountService;
import kits.final_project_api.Service.InterfaceNftPage.NftPageService;
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

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.*;

import java.util.*;

import org.springframework.ui.Model;

@Controller
@CrossOrigin
@RequestMapping("nfts")  //đường dẫn là nfts
public class NftController {
    @Autowired
    private NftServiceImpl nftServiceImpl;

    @Autowired
    private NftPageServiceImpl nftPageServiceImpl;

    @Autowired
    private NftPageService nftPageService;

    @GetMapping
    @ResponseBody
    public List<Map<String, Object>> getAllNfts(Model model) {
        List<Map<String, Object>> nfts = nftServiceImpl.GetAll();
        model.addAttribute("nfts", nfts);
        return nfts;
    }

    @PostMapping("/create")
    public ResponseEntity createNft(@Valid @RequestParam("nft_name") String nft_name,@RequestParam("image") String image, @RequestParam("price") Double price, @RequestParam("description") String description, @RequestParam("date_start_bid") String date_start_bid, @RequestParam("date_end_bid") String date_end_bid) {
        nftServiceImpl.CreateNft(nft_name, image, price ,description, date_start_bid, date_end_bid);
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
        //lấy toàn bộ thời gian start bid và end bid
        String dateStartEndBid = nftPageServiceImpl.getDateStart_EndBid(id);
        String[] date = dateStartEndBid.split(",");

        //cắt start bid và end bid ra
        String dateTimeStartBid = date[0];
        String dateTimeEndBid = date[1];
//        System.out.println("date time start bid " + dateTimeStartBid);
//        System.out.println("date time end bid " + dateTimeEndBid);

        //lấy thời gian bid còn lại
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date startBidDate = format.parse(dateTimeStartBid);
        Date endBidDate = format.parse(dateTimeEndBid);
//        System.out.println("StartBidDate " + startBidDate);
//        System.out.println("EndBidDate " + endBidDate);

        long timeDiff = endBidDate.getTime() - startBidDate.getTime();
        long daysRemain = timeDiff / (24 * 60 * 60 * 1000);
        long hoursRemain = (timeDiff - (daysRemain * 24 * 60 * 60 * 1000)) / 3600000;

        LocalDateTime ldt1 = LocalDateTime.ofInstant(startBidDate.toInstant(),
                ZoneId.systemDefault());
        LocalDateTime ldt2 = LocalDateTime.ofInstant(endBidDate.toInstant(),
                ZoneId.systemDefault());
        Duration duration = Duration.between(ldt1, ldt2);
        long hoursBetween = duration.toHours();
        long minutesBetween = duration.toMinutes() % 60;
        long secondsBetween = duration.getSeconds() % 60;
        String hBetween = String.valueOf(hoursBetween);
        String mBetween = String.valueOf(minutesBetween);
        String sBetween = String.valueOf(secondsBetween);
        String timeRemain = hBetween;
//        timeRemain.concat(hBetween);
        timeRemain = timeRemain.concat(":");
        timeRemain = timeRemain.concat(mBetween);
        timeRemain = timeRemain.concat(":");
        timeRemain = timeRemain.concat(sBetween);
        System.out.println("timeRemain " + timeRemain);
        System.out.println("Số giờ giữa hai mốc thời gian là: " + hoursBetween + " giờ, " + minutesBetween + " phút, " + secondsBetween + " giây.");


        System.out.println("ldt " + ldt1);

//        LocalTime time = LocalTime.of((int) hoursRemain, 0, 0, 0);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
//        String formattedTime = time.format(formatter);
        String daysRemainS = String.valueOf(daysRemain);

//        System.out.println("Số ngày giữa hai mốc thời gian là: " + daysRemain);
//        System.out.println("Số giờ giữa hai mốc thời gian là: " + hoursRemain);
//        System.out.println("time: " + endBidDate-startBidDate);
//        System.out.println("formattedTime " + formattedTime);
//        System.out.println("startBidDate.getTime() " + startBidDate.getTime());
//        System.out.println("endBidDate.getTime() " + endBidDate.getTime());
//        System.out.println("time " + time);
//        long startDate = Long.parseLong(StartBidDate.toString());
//        System.out.println("startDate " + startDate);
//
//        long endDate = Long.parseLong(EndBidDate.toString());
//        System.out.println("startDate " + endDate);
//        long dateBidRemain = endDate - startDate;
//        long startTime = StartBidDate.getTime();
//        long endTime = EndBidDate.getTime();
//        long timeBidRemain = endTime - startTime;
//        System.out.println("dateBidRemain " + dateBidRemain);
//        System.out.println("timeBidRemain " + timeBidRemain);
//        long longStartbid = Date.parse(dateTimeStartBid);
//        long longEndbid = Date.parse(dateTimeEndBid);

//        Date date1 = new SimpleDateFormat("dd/MM/yyyy").parse(dateTimeStartBid);
//        System.out.println(date1);

//        LocalDateTime localDateTimeStartBid = LocalDateTime.parse(dateTimeStartBid);
//        System.out.println("localDateTimeStartBid " + localDateTimeStartBid);

//        long timeBidRemain=longEndbid-longStartbid;
//        System.out.println("timeBidRemain: "+timeBidRemain);

//        System.out.println("longStartbid " + longStartbid);
//        System.out.println("longEndbid " + longEndbid);

        //cắt ngày và giờ start bid thành 2 giá trị
        String[] startBid = dateTimeStartBid.split(" ");
        String dateStartBid = startBid[0];
        String timeStartBid = startBid[1];
        timeStartBid = timeStartBid.replace(".0", "");

        //cắt ngày và giờ end bid thành 2 giá trị
        String[] endBid = dateTimeEndBid.split(" ");
        String dateEndBid = endBid[0];
        String timeEndBid = endBid[1];
        timeEndBid = timeEndBid.replace(".0", "");

        //lưu ngày - giờ start bid và end bid vào trong hashmap
        Map<String, String> dateTimeBid = new HashMap<>();
        dateTimeBid.put("dateStartBid", dateStartBid);
        dateTimeBid.put("timeStartBid", timeStartBid);
        dateTimeBid.put("dateEndBid", dateEndBid);
        dateTimeBid.put("timeEndBid", timeEndBid);
        dateTimeBid.put("dateBidRemain", daysRemainS);
        dateTimeBid.put("hoursBidRemain", timeRemain);
        //chuyển hash map thành json để show
        ObjectMapper objectMapper = new ObjectMapper();
        String jacksonData = objectMapper.writeValueAsString(dateTimeBid);

        System.out.println(jacksonData);

        return jacksonData;
    }
    @GetMapping("/nft-detail-page/{id}")
    @ResponseBody
    public List<Map<String, Object>> getNftInfoDetailPage(@PathVariable Integer id){
        List<Map<String, Object>> nftDetailPage = nftPageServiceImpl.getNftInfoDetailPage(id);
        return nftDetailPage;
    }
}
