package kits.final_project_api.Service.impl.Ranking;

import kits.final_project_api.Repository.Ranking.TopCreatorByDateRepository;
import kits.final_project_api.Service.InterfaceRankingPage.TopCreatorByDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TopCreatorByDateServiceImpl implements TopCreatorByDateService {
    @Autowired
    private TopCreatorByDateRepository topCreatorByDateRepository;

    @Override
    public List<Map<String, Object>> getTopCreatorToday(String date) {
        return topCreatorByDateRepository.getTopCreatorToday(date);
    }

}
