package kits.final_project_api.Service.impl.NftPage;

import kits.final_project_api.Repository.NftPage.NftPageRepository;
import kits.final_project_api.Service.InterfaceNftPage.NftPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
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

    @Override
    public List<Map<String, Object>> getNftAndUser_Info(Integer id) {

        List<Map<String, Object>> getNftAndUserInfo = nftPageRepository.getNftAndUser_Info(id);
        return getNftAndUserInfo;
    }

    @Override
    public List<Map<String, Object>> getClassifyAndCategory_Info(Integer id) {
        List<Map<String, Object>> getClassifyAndCategoryInfo = nftPageRepository.getClassifyAndCategory_Info(id);
        return getClassifyAndCategoryInfo;
    }

    @Override
    public List<Map<String, Object>> getNftInfoDetailPage(Integer id) {
        List<Map<String, Object>> getNftAndUserInfo = nftPageRepository.getNftAndUser_Info(id);
        List<Map<String, Object>> getClassifyAndCategoryInfo = nftPageRepository.getClassifyAndCategory_Info(id);
        List<Map<String, Object>> result = new ArrayList<>();
        Map<String, Object> newMap = new HashMap<>();
        for (Map<String, Object> map1 : getNftAndUserInfo) {
            for (Map<String, Object> map2 : getClassifyAndCategoryInfo) {
                System.out.println("m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));
//                System.out.println("aaaa");
//                System.out.println("m2.get(cc.username: )" + map2.get("username"));
                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
                    newMap.put("nft_name", map1.get("nft_name"));
                    newMap.put("image", map1.get("image"));
                    newMap.put("price", map1.get("price"));
                    newMap.put("description", map1.get("description"));
                    newMap.put("date_create", map1.get("date_create"));
                    newMap.put("username", map1.get("username"));
                    newMap.put("avatar", map1.get("avatar"));
                    newMap.put("categories_name", map2.get("categories_name"));
//                    String date= (String) map1.get("date_create");
//                    String dateCreate[]=date.split("T");
//                    newMap.put("date_create", dateCreate[0]);
//                    System.out.println();
                }
            }


        }
        result.add(newMap);
        System.out.println(result);
        return result;
    }
}
