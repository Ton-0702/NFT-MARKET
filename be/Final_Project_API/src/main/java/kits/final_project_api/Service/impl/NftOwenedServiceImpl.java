package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Entity.NFTOwened;
import kits.final_project_api.Repository.NftOwenedRepository;
import kits.final_project_api.Service.NftOwenedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class NftOwenedServiceImpl implements NftOwenedService {

    @Autowired
    private NftOwenedRepository nftOwenedRepository;
    

    @Override
    public <S extends NFTOwened> S saveAndFlush(S entity) {
        return nftOwenedRepository.saveAndFlush(entity);
    }


    @Override
    public void CreateNftOwned(Long nft_id, Long account_id, Long collection_id) {
        // TODO Auto-generated method stub
        System.out.println("++++++++++++++++++NFTID: "+nft_id);
        nftOwenedRepository.CreateNftOwned(nft_id, account_id, collection_id);
    }

    // @Override
    // public void createNftOwned(Long account_owned_id, Long account_id, Long collection_id) {
    //     NFTOwened createNftOwned = new NFTOwened();
    //     createNftOwned.setId(account_owned_id);
    //     createNftOwned.setAccount_id(account_id);
    //     createNftOwned.setCollection_id(collection_id);
    //     nftOwenedRepository.save(createNftOwned);
    // }

    // @Override
    // public void CreateNftOwned(Long nft_id, Long account_id, Long collection_id) {
    //     NFTOwened createNftOwned = new NFTOwened();
    //     createNftOwned.setId(nft_id);
    //     createNftOwned.setAccount_id(account_id);
    //     createNftOwned.setCollection_id(collection_id);
    //     nftOwenedRepository.save(createNftOwned);
    // }

    // @Override
    // public void CreateNftOwned(Long nft_id, Long account_id, Integer collection_id) {
    //     // TODO Auto-generated method stub
    //     nftOwenedRepository.CreateNftOwned(nft_id, account_id, collection_id);
    // }
}
