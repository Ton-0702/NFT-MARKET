package kits.final_project_api.Service.impl.Ranking;

import kits.final_project_api.Repository.Ranking.TopCreatorByDateRepository;
import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class TopCreatorByDateServiceImpl implements TopCreatorByDateService {
    @Autowired
    private TopCreatorByDateRepository topCreatorByDateRepository;

    @Override
    public List<Map<String, Object>> getTopCreatorToday(Integer offset, Integer limit) {
        LocalDateTime date_current = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);

//        Comparator<Map<String, Object>> c = creatorToday.sort(Comparator.comparing((Map<String, Object> m) -> (int) m.get("nft_sold"), Comparator.nullsLast(Comparator.reverseOrder())).thenComparing(m -> (Double) m.get("volume")));

//        Pag page = (Pageable) PageRequest.of(pageable,2);

//        Pageable page = PageRequest.of(pageable, 2);
//
//        Page<Map<String, Object>> pageResult = (Page<Map<String, Object>>) topCreatorByDateRepository.getTopCreatorToday(date_current_format, page);

        return topCreatorByDateRepository.getTopCreatorToday(date_current_format, offset, limit);
    }

    @Override
    public List<Map<String, Object>> getTopCreatorAllTime(Integer offset, Integer limit) {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        return topCreatorByDateRepository.getTopCreatorAllTime(date_current_format, offset, limit);
    }

}
