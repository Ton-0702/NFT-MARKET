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
import java.util.function.BiFunction;

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
            newMap.put("account_id", map1.get("account_id"));
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
        System.out.println("highest_bid: " + getTransactionInfo.size());
        boolean check = false;
        for (Map<String, Object> map1 : getNftAndUserInfo) {
//            for (Map<String, Object> map2 : getTransactionInfo) {


//                if (map1.get("nft_id").equals(map2.get("nft_id"))) {
//
//                System.out.println("m1.get(n.nft_id): " + map1.get("nft_id") + "   " + "m2.get(cc.nft_id): " + map2.get("nft_id"));
//                    check = true;
            Map<String, Object> newMap = new HashMap<>();
            newMap.put("nft_id", map1.get("nft_id"));
            newMap.put("nft_name", map1.get("nft_name"));
            newMap.put("image", map1.get("image"));
            newMap.put("price", map1.get("price"));
            newMap.put("username", map1.get("username"));
            newMap.put("avatar", map1.get("avatar"));

//            newMap.put("highest_bid", map2.get("highest_bid"));
            newMap.put("highest_bid", "Null");
            result.add(newMap);
        }
        return result;
    }
//                }
//                else {
//                    String nft_name = (String) map1.get("nft_name");
//                    boolean check_result = false;
//                    if(nft_name.contains(name)){
//                        for (Map<String,Object> res: result){
//                            if(( (String) res.get("nft_name")).contains(nft_name)){
//                                check_result = true;
//                                break;
//                            }
//                        }
//                        if (check_result == false){
//                            Map<String, Object> newMap = new HashMap<>();
//                            newMap.put("nft_id", map1.get("nft_id"));
//                            newMap.put("nft_name", map1.get("nft_name"));
//                            newMap.put("image", map1.get("image"));
//                            newMap.put("price", map1.get("price"));
//                            newMap.put("username", map1.get("username"));
//                            newMap.put("avatar", map1.get("avatar"));
//
//                            newMap.put("highest_bid", 0.0);
//                            result.add(newMap);
//                        }
//                    }
//                }
//            }
//        }

//        if (check == false && getNftAndUserInfo.size() ==1){
//            System.out.println("+++++++++++result: "+result);
//            Map<String, Object> newMap = new HashMap<>();
//            newMap.put("nft_id", getNftAndUserInfo.get(0).get("nft_id"));
//            newMap.put("nft_name", getNftAndUserInfo.get(0).get("nft_name"));
//            newMap.put("image", getNftAndUserInfo.get(0).get("image"));
//            newMap.put("price", getNftAndUserInfo.get(0).get("price"));
//            newMap.put("username", getNftAndUserInfo.get(0).get("username"));
//            newMap.put("avatar", getNftAndUserInfo.get(0).get("avatar"));
//
//            newMap.put("highest_bid", 0.0);
//            result.add(newMap);
//        }

//        List<Map<String, Object>> newResult = new ArrayList<>();
//        for(int i =0; i<result.size()-1; i++){
//            Double current = (Double) result.get(i).get("highest_bid");
//
//
//
//            boolean check_result2 = false;
//            String nft_name = (String) result.get(i).get("nft_name");
////            System.out.println("NFT_name: "+nft_name);
//            for (Map<String,Object> res: newResult){
//                if(( (String) res.get("nft_name")).contains(nft_name)){
//                    check_result2 = true;
//                    break;
//                }
//            }
//            if(check_result2 == false){
//                Map<String,Object> newMap = new HashMap<>();
//                newMap.putAll(result.get(i));
//                Double max_result = current;
//                for(int j=i+1; j<result.size();j++){
//                    System.out.println("(Double) result.get(j).get(highest_bid): "+result.get(j).get("highest_bid"));
//                    if( current < ((Double) result.get(j).get("highest_bid"))){
//                        max_result = current;
//                        newMap.replace("nft_id", result.get(j).get("nft_id"));
//                        newMap.replace("nft_name", result.get(j).get("nft_name"));
//                        newMap.replace("image", result.get(j).get("image"));
//                        newMap.replace("price", result.get(j).get("price"));
//                        newMap.replace("username", result.get(j).get("username"));
//                        newMap.replace("avatar", result.get(j).get("avatar"));
//
//                        newMap.replace("highest_bid", result.get(j).get("highest_bid"));
//                    }
//                }
//                newResult.add(newMap);
//                System.out.println("newResult: "+newResult);
//            }
//
//        }


//        System.out.println(newResult);
//        return newResult;


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
        // List<Map<String, Object>> getTransactionInfo = nftPageRepository.getTransactionInfoById(id);
        List<Map<String, Object>> result = new ArrayList<>();
        System.out.println("123abc");
        for (Map<String, Object> map1 : getNftAndUserInfoByID) {
            // for (Map<String, Object> map2 : getTransactionInfo) {

            // System.out.println("map1.get(account_id): " + map1.get("account_id") + "   " + "map2.get(account_id): " + map2.get("account_id"));
            // System.out.println("map1.get(nft_id): " + map1.get("nft_id") + "   " + "map2.get(nft_id): " + map2.get("nft_id"));


            // if (map1.get("nft_id").equals(map2.get("nft_id"))) {
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

            // newMap.put("highest_bid", map2.get("highest_bid"));
            result.add(newMap);
            //   }else{
            //         Map<String, Object> newMap = new HashMap<>();
            //         newMap.put("nft_id", map1.get("nft_id"));
            //         newMap.put("nft_name", map1.get("nft_name"));
            //         newMap.put("image", map1.get("image"));
            //         newMap.put("price", map1.get("price"));
            //         newMap.put("username", map1.get("username"));
            //         newMap.put("avatar", map1.get("avatar"));

            //         newMap.put("highest_bid", 0);
            //         result.add(newMap);
            //     }
            // }

        }


        System.out.println(result);
        return result;
    }
}