package kits.final_project_api.Controller.RankingPage;

import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin
@RequestMapping("api")
public class RankingPage {
    @Autowired
    private TopCreatorByDateService topCreatorByDateService;

    @GetMapping("/ranking/today")
    @ResponseBody
    // Xuất ra 10 bản top creator cho mỗi page
    public List<Map<String, Object>> getTopCreatorToday(@RequestParam Integer page) {
        Integer offset = (page * 10) - 10;
        return topCreatorByDateService.getTopCreatorToday(offset);
    }

    @GetMapping("/ranking/all")
    @ResponseBody
    // Xuất ra 10 bản top creator cho mỗi page
    public List<Map<String, Object>> getTopCreatorAllTime(@RequestParam Integer page) {
        // Integer limit = page*10;
        Integer offset = (page * 10) - 10;
        return topCreatorByDateService.getTopCreatorAllTime(offset);
    }
}