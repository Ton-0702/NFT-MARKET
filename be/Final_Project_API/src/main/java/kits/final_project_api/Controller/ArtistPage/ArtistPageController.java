package kits.final_project_api.Controller.ArtistPage;

import kits.final_project_api.Service.ArtistPage.ArtistPageService;
import kits.final_project_api.Service.impl.ArtistPage.ArtistServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin
@RequestMapping("api/artist")
public class ArtistPageController {
    @Autowired
    private ArtistPageService artistService;

    @GetMapping("/{account_id}")
    @ResponseBody
    public List<Map<String, Object>> getDetailArtist(@PathVariable Integer account_id){
//        System.out.println(account_id);
        List<Map<String, Object>> detail = artistService.getDetailArtist(account_id);

        return detail;
    }
}
