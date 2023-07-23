package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Repository.NftRepository;
import kits.final_project_api.Service.NftService;
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
public class NftServiceImpl implements NftService {

    @Autowired
    private NftRepository nftRepository;

    @Override
    public NFT getReferenceById(Long nft_id) {
        return nftRepository.getReferenceById(nft_id);
    }

    @Override
    public <S extends NFT> S saveAndFlush(S entity) {
        return nftRepository.saveAndFlush(entity);
    }

    @Override
    public void updateNFTOwner(Long nft_id, Long account_id){
        nftRepository.updateNFTOwner(nft_id, account_id);
    }

    @Override
    public List<Map<String, Object>> GetAll() {
        return nftRepository.GetAll();

    }

    @Override
    public void CreateNft(@Valid String nft_name, String image, Double price, String description, String date_start_bid,
            String date_end_bid) {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        NFT createNFT = new NFT();
        createNFT.setNft_name(nft_name);
        createNFT.setImage(image);
        createNFT.setPrice(price);
        createNFT.setDescription(description);
        createNFT.setDate_create(date_current_format);
        createNFT.setDate_start_bid(date_start_bid);
        createNFT.setDate_end_bid(date_end_bid);
        createNFT.setAccount(null);
        nftRepository.save(createNFT);
    }

    public void CreateNft() {
    }

}
