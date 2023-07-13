package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Repository.NftRepository;
import kits.final_project_api.Service.NftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class NftServiceImpl implements NftService {

    @Autowired
    private NftRepository nftRepository;

    @Override
    public List<Map<String, Object>> GetAll() {
        return nftRepository.GetAll();

    }
    @Override
    public List<Map<String, Object>> CreateNft() {
        return nftRepository.CreateNft();

    }

}
