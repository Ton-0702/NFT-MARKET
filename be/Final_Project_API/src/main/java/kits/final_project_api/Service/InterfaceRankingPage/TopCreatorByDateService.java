package kits.final_project_api.Service.InterfaceRankingPage;

import java.util.List;
import java.util.Map;

public interface TopCreatorByDateService {
    List<Map<String,Object>> getTopCreatorToday(String date, Integer page, Integer );

}
