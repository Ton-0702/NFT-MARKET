package kits.final_project_api.Controller.RankingPage;

import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("api")
public class RankingPage {
    @Autowired
    private TopCreatorByDateService topCreatorByDateService;

    @GetMapping("/ranking/today")

    public List<Map<String, Object>> getTopCreatorToday(@RequestParam Integer page){
        Integer pageWeb = page;
        Integer numberCreator = pageWeb * 10;
        return topCreatorByDateService.getTopCreatorToday(page);
    }
}
