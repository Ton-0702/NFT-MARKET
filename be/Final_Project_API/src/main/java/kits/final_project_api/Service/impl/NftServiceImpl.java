package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.NFT;
import kits.final_project_api.Repository.NftRepository;
import kits.final_project_api.Service.NftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

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
    public List<Map<String, Object>> GetAll() {
        return nftRepository.GetAll();

    }

    @Override
    public void CreateNft(NFT nft) {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        NFT createNFT = new NFT();
        createNFT.setNft_name(nft.getNft_name());
        createNFT.setImage(nft.getImage());
        createNFT.setPrice(nft.getPrice());
        createNFT.setDescription(nft.getDescription());
        createNFT.setDate_create(date_current_format);
        createNFT.setDate_start_bid(nft.getDate_start_bid());
        createNFT.setDate_end_bid(nft.getDate_end_bid());
        createNFT.setAccount(nft.getAccount());
        nftRepository.save(createNFT);
    }

}
