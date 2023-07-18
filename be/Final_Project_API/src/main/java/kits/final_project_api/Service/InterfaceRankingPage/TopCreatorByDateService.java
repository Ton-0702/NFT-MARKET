package kits.final_project_api.Service.InterfaceRankingPage;

import java.util.List;
import java.util.Map;

public interface TopCreatorByDateService {
    List<Map<String,Object>> getTopCreatorToday(Integer offset, Integer limit);

    List<Map<String,Object>> getTopCreatorAllTime(Integer offset, Integer limit);
}
