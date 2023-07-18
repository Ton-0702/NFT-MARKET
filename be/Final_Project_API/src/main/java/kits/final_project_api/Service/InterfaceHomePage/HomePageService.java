package kits.final_project_api.Service.InterfaceHomePage;

import java.util.List;
import java.util.Map;

public interface HomePageService {
    List<Map<String, Object>> getOverallFiguresHomePage();

    List<Map<String, Object>> getTopCreatorAllTime(Integer showlimit);

    List<Map<String, Object>> getNewTrendingNft(Integer showlimit);


}
