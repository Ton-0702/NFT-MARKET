package kits.final_project_api.Service.impl.ArtistPage;

import kits.final_project_api.Repository.ArtistPage.ArtistRepository;
import kits.final_project_api.Service.ArtistPage.ArtistPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ArtistServiceImpl implements ArtistPageService {
    @Autowired
    private ArtistRepository artistRepository;


    @Override
    public List<Map<String, Object>> getDetailArtist(Integer account_id) {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        List<Map<String, Object>> Artist = artistRepository.getDetailArtist(date_current_format, account_id);

        List<Map<String, Object>> followers = artistRepository.getFollower();
//        System.out.println(followers);

        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, Object> m1 : Artist){
            Map<String, Object> newMap = new HashMap<>();
            newMap.putAll(m1);
            for(Map<String, Object> m2 : followers) {
                if (m1.get("account_id").equals(m2.get("user_id"))){
                    newMap.put("followers", m2.get("followers"));
                }
            }
            result.add(newMap);
        }
        return result;
    }
}
