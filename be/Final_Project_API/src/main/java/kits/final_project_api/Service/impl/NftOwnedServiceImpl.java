package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Entity.NFTOwned;
import kits.final_project_api.Repository.NftOwnedRepository;
import kits.final_project_api.Service.NftOwnedService;
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
public class NftOwnedServiceImpl implements NftOwnedService {

    @Autowired
    private NftOwnedRepository nftOwnedRepository;
    

    @Override
    public <S extends NFTOwned> S saveAndFlush(S entity) {
        return nftOwnedRepository.saveAndFlush(entity);
    }

    @Override
    public void createNftOwned(@Valid Long account_owned_id, Long account_id, Long collection_id) {
        NFTOwned createNftOwned = new NFTOwned();
        createNftOwned.setNft_owned_id(account_owned_id);
        createNftOwned.setAccount_id(account_id);
        createNftOwned.setCollection_id(collection_id);
        nftOwnedRepository.saveAndFlush(createNftOwned);
    }

}
