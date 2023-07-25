package kits.final_project_api.Service.impl.NftPage;

import kits.final_project_api.Repository.NftPage.NftPageRepository;
import kits.final_project_api.Service.AccountService;
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
    public String getDateCreate(Integer id) {
        return nftPageRepository.getDateCreate(id);
    }


    @Override
    public List<Map<String, Object>> getTransactionInfo() {
        return nftPageRepository.getTransactionInfo();
    }

    @Override
    public List<Map<String, Object>> getNftAndAccountInfo() {
        return nftPageRepository.getNftAndAccountInfo();
    }

    @Override
    public List<Map<String, Object>> getNftInfoDetailPage(Integer id) {
        List<Map<String, Object>> getNftAndUserInfo = nftPageRepository.getNftAndUser_Info(id);
//        List<Map<String, Object>> getClassifyAndCategoryInfo = nftPageRepository.getClassifyAndCategory_Info(id);
        List<Map<String, Object>> result = new ArrayList<>();
        Map<String, Object> newMap = new HashMap<>();
        String temp = "";
        for (Map<String, Object> map1 : getNftAndUserInfo) {
//            for (Map<String, Object> map2 : getClassifyAndCategoryInfo) {
//                System.out.println(
//                        "m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));


//                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
            newMap.put("nft_id", map1.get("nft_id"));
            newMap.put("nft_name", map1.get("nft_name"));
            newMap.put("image", map1.get("image"));
            newMap.put("price", map1.get("price"));
            newMap.put("description", map1.get("description"));
            newMap.put("username", map1.get("username"));
            newMap.put("avatar", map1.get("avatar"));
//                    System.out.println("categories_name " + map2.get("categories_name"));
//                    newMap.put("categories_name", map2.get("categories_name"));
            String getDateCreate = nftPageRepository.getDateCreate(id);
            String[] dateTimeCreate = getDateCreate.split("T");
            String dateCreate = dateTimeCreate[0];
            String[] dateCreateSplit = dateCreate.split(" ");
            String dateSplit = dateCreateSplit[0];
            newMap.put("date_create", dateSplit);
            System.out.println("dateCreate " + dateCreate);

        }
        result.add(newMap);
        System.out.println(result);
        return result;
    }

    @Override
    public List<Map<String, Object>> getAllNftInfo() {
        List<Map<String, Object>> getNftAndUserInfo = nftPageRepository.getNftAndAccountInfo();
        List<Map<String, Object>> getTransactionInfo = nftPageRepository.getTransactionInfo();
        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, Object> map1 : getNftAndUserInfo) {
            for (Map<String, Object> map2 : getTransactionInfo) {


                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
//
//                System.out.println("m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));

                    Map<String, Object> newMap = new HashMap<>();
                    newMap.put("nft_id", map1.get("nft_id"));
                    newMap.put("nft_name", map1.get("nft_name"));
                    newMap.put("image", map1.get("image"));
                    newMap.put("price", map1.get("price"));
                    newMap.put("username", map1.get("username"));
                    newMap.put("avatar", map1.get("avatar"));

                    newMap.put("highest_bid", map2.get("highest_bid"));
                    result.add(newMap);
                }
            }

        }


        System.out.println(result);
        return result;
    }

    @Override
    public List<Map<String, Object>> getNftInfoByName(String name) {
        List<Map<String, Object>> getNftAndUserInfo = nftPageRepository.getNftInfoByName(name);
        List<Map<String, Object>> getTransactionInfo = nftPageRepository.getTransactionInfo();
        List<Map<String, Object>> result = new ArrayList<>();

        for (Map<String, Object> map1 : getNftAndUserInfo) {
            for (Map<String, Object> map2 : getTransactionInfo) {


                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
//
//                System.out.println("m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));

                    Map<String, Object> newMap = new HashMap<>();
                    newMap.put("nft_id", map1.get("nft_id"));
                    newMap.put("nft_name", map1.get("nft_name"));
                    newMap.put("image", map1.get("image"));
                    newMap.put("price", map1.get("price"));
                    newMap.put("username", map1.get("username"));
                    newMap.put("avatar", map1.get("avatar"));

                    newMap.put("highest_bid", map2.get("highest_bid"));
                    result.add(newMap);
                }
            }

        }


        System.out.println(result);
        return result;
    }

    @Override
    public List<Map<String, Object>> getTotalNftAndCollection() {
        String totalNFT = nftPageRepository.getTotalNFT();
        String totalCollection = nftPageRepository.getTotalCollection();
        List<Map<String, Object>> result = new ArrayList<>();
        Map<String, Object> newMap = new HashMap<>();
        newMap.put("total_nft", totalNFT);
        newMap.put("total_collection", totalCollection);
        result.add(newMap);
        System.out.println(result);
        return result;
    }

    @Override
    public List<Map<String, Object>> getTotalNftInfoByID(Integer id) {
        List<Map<String, Object>> getNftAndUserInfoByID = nftPageRepository.getNftAndAccountInfoById(id);
        List<Map<String, Object>> getTransactionInfo = nftPageRepository.getTransactionInfoById(id);
        List<Map<String, Object>> result = new ArrayList<>();
        System.out.println("123abc");
        for (Map<String, Object> map1 : getNftAndUserInfoByID) {
            for (Map<String, Object> map2 : getTransactionInfo) {

                System.out.println("map1.get(account_id): " + map1.get("account_id") + "   " + "map2.get(account_id): " + map2.get("account_id"));
                System.out.println("map1.get(nft_id): " + map1.get("nft_id") + "   " + "map2.get(nft_id): " + map2.get("nft_id"));

                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
//
//                System.out.println("m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));
                    System.out.println("aaaaa");
                    Map<String, Object> newMap = new HashMap<>();
                    newMap.put("nft_id", map1.get("nft_id"));
                    newMap.put("nft_name", map1.get("nft_name"));
                    newMap.put("image", map1.get("image"));
                    newMap.put("price", map1.get("price"));
                    newMap.put("username", map1.get("username"));
                    newMap.put("avatar", map1.get("avatar"));

                    newMap.put("highest_bid", map2.get("highest_bid"));
                    result.add(newMap);
              }else{
                    Map<String, Object> newMap = new HashMap<>();
                    newMap.put("nft_id", map1.get("nft_id"));
                    newMap.put("nft_name", map1.get("nft_name"));
                    newMap.put("image", map1.get("image"));
                    newMap.put("price", map1.get("price"));
                    newMap.put("username", map1.get("username"));
                    newMap.put("avatar", map1.get("avatar"));

                    newMap.put("highest_bid", "Null");
                    result.add(newMap);
                }
            }

        }


        System.out.println(result);
        return result;
    }
}