package kits.final_project_api.Controller.HomePage;

import kits.final_project_api.Service.InterfaceHomePage.HomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin
@RequestMapping("api")
public class HomePageController {
    @Autowired
    private HomePageService homePageService;

    @GetMapping("/home/overall-figures")
    @ResponseBody
    public List<Map<String, Object>> getOverallFigures(){
        List<Map<String, Object>> figures = homePageService.getOverallFiguresHomePage();
        return figures;
    }

    @GetMapping("/home/top-creator")
    @ResponseBody
    public List<Map<String, Object>> getTopCreatorAllTime(){
        List<Map<String, Object>> topCreator = homePageService.getTopCreatorAllTime();
        return topCreator;
    }

    @GetMapping("/home/trending-nft")
    @ResponseBody
    public List<Map<String, Object>> getNewTrendingNft(){
        List<Map<String, Object>> topTrending = homePageService.getNewTrendingNft();
        return topTrending;
    }

    @GetMapping("/home/trending-collection")
    @ResponseBody
    public List<Map<String, Object>> getNewTrendingCollection(){
        List<Map<String, Object>> topTrending = homePageService.getTrendingCollection();
        return topTrending;
    }
}
