package kits.final_project_api.Controller.RankingPage;

import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("api")
public class RankingPage {
    @Autowired
    private TopCreatorByDateService topCreatorByDateService;

    @GetMapping("/ranking/date/{limit}")
    @ResponseBody

    public List<Map<String, Object>> getTopCreatorToday(String date){
        LocalDateTime date_current = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        LocalDateTime dateTime = LocalDateTime.parse(date_current_format, myFormatObj);
        System.out.println("date_current_format: "+date_current_format);
        System.out.println("dateTime: "+dateTime);
        return topCreatorByDateService.getTopCreatorToday(date_current_format);
    }
}
