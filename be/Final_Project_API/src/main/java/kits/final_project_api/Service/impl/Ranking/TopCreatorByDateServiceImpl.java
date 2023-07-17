package kits.final_project_api.Service.impl.Ranking;

import kits.final_project_api.Repository.Ranking.TopCreatorByDateRepository;
import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

@Service
public class TopCreatorByDateServiceImpl implements TopCreatorByDateService {
    @Autowired
    private TopCreatorByDateRepository topCreatorByDateRepository;

    @Override
    public List<Map<String, Object>> getTopCreatorToday(Integer page, Integer numberCreator) {
        LocalDateTime date_current = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);

//        Comparator<Map<String, Object>> c = creatorToday.sort(Comparator.comparing((Map<String, Object> m) -> (int) m.get("nft_sold"), Comparator.nullsLast(Comparator.reverseOrder())).thenComparing(m -> (Double) m.get("volume")));


        return topCreatorByDateRepository.getTopCreatorToday(date_current_format, page, numberCreator);
    }

}
