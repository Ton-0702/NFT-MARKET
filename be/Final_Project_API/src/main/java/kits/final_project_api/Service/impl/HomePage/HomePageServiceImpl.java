package kits.final_project_api.Service.impl.HomePage;

import kits.final_project_api.Repository.ComponentRepository.NftComponentRepository;
import kits.final_project_api.Repository.HomePage.HomePageRepository;
import kits.final_project_api.Service.InterfaceHomePage.HomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class HomePageServiceImpl implements HomePageService {
    @Autowired
    private NftComponentRepository nftComponentRepository;

    @Autowired
    private HomePageRepository homePageRepository;


    // Tính thời gian hiện tại trừ đi 1 ngày => Tính ngày trước ngày hiện tại
    public String dateBeforeNow() {
        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = date_current.format(myFormatObj);
        return date_current_format;
    }


    @Override
    public List<Map<String, Object>> getOverallFiguresHomePage() {
//        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
//        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = dateBeforeNow();
//        System.out.println(date_current_format);
        List<Map<String, Object>> transactionTable = homePageRepository.getTransaction(date_current_format);

        // Tính tổng đấu giá trước ngày hôm nay
        Double sum_transaction = transactionTable.stream().map(m -> m.get("max")).mapToDouble(value -> (double) value).sum();

        // Tổng số lượt đấu giá
        Integer auctions = homePageRepository.getTotalAuctions();

        // Tổng hoạ sĩ hiện có
        Integer artist = homePageRepository.getTotalAccount();

        // Tạo list chứa Map<key,value> mới sau khi đã tính toán các giá trị cần
        List<Map<String, Object>> overallFigures = new ArrayList<>();
        Map<String, Object> figures = new HashMap<>();
        figures.put("total_sales", Double.valueOf(String.format("%.2f", sum_transaction)));
        figures.put("auctions", auctions);
        figures.put("artists", artist);

        overallFigures.add(figures);

        return overallFigures;
    }

    @Override
    public List<Map<String, Object>> getTopCreatorAllTime() {
//        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
//        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date_current_format = dateBeforeNow();

        // get account_id, username, avatar
        List<Map<String, Object>> account = homePageRepository.getInfoAccount();
        //get total sale one account ( n.account_id, MAX(t.highest_bid) AS max )
        List<Map<String, Object>> account_transaction = homePageRepository.getMaxTransactionByNftId(date_current_format);

        List<Map<String, Object>> newAccount_transaction_sum = new ArrayList<>();
        for (int l1 = 0; l1 < account_transaction.size() - 1; l1++) {
            Map<String, Object> newMap = new HashMap<>();
            newMap.putAll(account_transaction.get(l1));
            for (int l2 = l1 + 1; l2 < account_transaction.size(); l2++) {
                if (account_transaction.get(l1).get("account_id").equals(account_transaction.get(l2).get("account_id"))) {
                    double freq = (double) newMap.get("total_sale");
                    double test = (double) account_transaction.get(l2).get("total_sale");

                    freq += test;

                    newMap.put("total_sale", freq);
                }
            }
            if (newAccount_transaction_sum == null) {
                newAccount_transaction_sum.add(newMap);
            } else {
                boolean check = false;
                for (Map<String, Object> m1 : newAccount_transaction_sum) {
                    if (m1.get("account_id").equals(newMap.get("account_id"))) {
                        check = true;
                    }
                }
                if (check == false) {
                    newAccount_transaction_sum.add(newMap);
                }
            }
        }
//        account_transaction.forEach(m1 -> account_transaction.stream().filter(m2 -> m1.get("account_id").equals(m2.get("account_id"))).collect(Collectors.groupingBy())); //.mapToDouble(value -> (double) value.get("max")).s)

        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, Object> m1 : newAccount_transaction_sum) {
            Map<String, Object> newMap = new HashMap<>();
            newMap.putAll(m1);
            for (Map<String, Object> m2 : account) {
                if (m1.get("account_id").equals(m2.get("account_id"))) {
//                    newMap.put("total_sale", Double.valueOf(String.format("%.2f", m2.get("max"))));
                    newMap.put("username", m2.get("username"));
                    newMap.put("avatar", m2.get("avatar"));
                    break;
                }
            }
            result.add(newMap);
        }
        //listMap.sort(Comparator.comparing(m->(double) m.get("full_inc"),Comparator.nullsLast(Comparator.reverseOrder())));
        result.sort(Comparator.comparing(m -> (double) m.get("total_sale"), Comparator.nullsLast(Comparator.reverseOrder())));
        List<Map<String, Object>> firstNElementsResult = result.stream().limit(12).collect(Collectors.toList());
        return firstNElementsResult;
    }

    @Override
    public List<Map<String, Object>> getNewTrendingNft() {
        String date_current_format = dateBeforeNow();
        //Lấy thông tin account
        List<Map<String, Object>> account = nftComponentRepository.getAccount();

        // Lấy nft xu hướng có số coin đấu giá cao nhất
        List<Map<String, Object>> nftTrendingMaxBid = nftComponentRepository.getMaxTrendingNft(date_current_format);

        // Tính tổng số nft đấu giá có bao nhiêu lượt được đấu giá
//        List<Map<String, Object>> nftTrendingCount = nftComponentRepository.getTrendingNFt();

        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, Object> m1 : nftTrendingMaxBid) {
            Map<String, Object> newMap = new HashMap<>();
            newMap.putAll(m1);
            for (Map<String, Object> m2 : account) {
                if (m1.get("account_id").equals(m2.get("account_id"))) {
                    newMap.put("avatar", m2.get("avatar"));
                    newMap.put("username", m2.get("username"));
                    break;
                }
            }
            result.add(newMap);
        }
        System.out.println(result);
        result.sort(Comparator.comparing(m -> (Double) m.get("highest_bid"), Comparator.nullsLast(Comparator.reverseOrder())));


        List<Map<String, Object>> firstNElementsResult = result.stream().limit(3).collect(Collectors.toList());
        return firstNElementsResult;
    }

    @Override
    public List<Map<String, Object>> getTrendingCollection() {
        List<Map<String, Object>> getAccount = homePageRepository.getInfoAccount();
        List<Map<String, Object>> getTotalCollectionAccount = homePageRepository.getTotalCollectionAccount();
        List<Map<String, Object>> getCollectionImage = homePageRepository.getCollectionImage();

        List<Map<String, Object>> result = new ArrayList<>();
        for (Map<String, Object> m1 : getTotalCollectionAccount){
            Map<String, Object> newMap = new HashMap<>();
            newMap.putAll(m1);
            List<Object> newNftImage = new ArrayList<>();
            for(Map<String, Object> m2: getCollectionImage){
                System.out.println("m1.get(collection_id): "+m1.get("collection_id") + "   " + "m2.get(collection_id): "+m2.get("collection_id"));
                if(m1.get("collection_id").equals(m2.get("collection_id"))){
                    newNftImage.add(m2.get("image"));
                    System.out.println("m2.get(collection_id): "+newNftImage);
                }
            }
            System.out.println(newNftImage);
            newMap.put("nft_image", newNftImage);
            for(Map<String, Object> m3 : getAccount){
                if(m1.get("account_id").equals(m3.get("account_id"))){
                    newMap.put("username", m3.get("username"));
                    newMap.put("avatar", m3.get("avatar"));
                }
            }
            result.add(newMap);
        }

        result.sort(Comparator.comparing(m -> (long) m.get("trending_collection"), Comparator.nullsLast(Comparator.reverseOrder())));
        List<Map<String, Object>> result_limit = result.stream().limit(3).collect(Collectors.toList());
        return result_limit;
    }

}
