package kits.final_project_api.Service.impl.NftPage;

import kits.final_project_api.Repository.NftPage.NftPageRepository;
import kits.final_project_api.Service.InterfaceNftPage.NftPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class NftPageServiceImpl implements NftPageService {
    @Autowired
    private NftPageRepository nftPageRepository;

    @Override
    public String getDateStart_EndBid(Integer id) {
       return nftPageRepository.getDateStart_EndBid(id);
    }
//    @Override
//    public String getDateEndBid(Integer id) {
//        return nftPageRepository.getDateEndBid(id);
//    }
}
