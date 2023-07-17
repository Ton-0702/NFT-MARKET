package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Collection;
import kits.final_project_api.Repository.CollectionRepository;
import kits.final_project_api.Service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CollectionServiceImpl implements CollectionService {
    @Autowired
    private CollectionRepository collectionRepository;

    @Override
    public List<Map<String, Object>> GetAllCollection() {
        return collectionRepository.GetAllCollection();

    }


}
