package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.TopCreatorDTO;
import kits.final_project_api.Repository.AccountRepository;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    @Override
    public List<Map<String, Object>> getTopCreatorToday(String date) {

//        List<Map<String, Object>> getSQL = accountRepository.getTopCreatorToday(date);
//        HashMap<String, Object> newObject = new HashMap<>();
//        List<Map<String, Object>> newData;
//
//        for (int i=0; i< getSQL.size(); i++){
//            if (!newObject.containsKey(getSQL.get(i).get("nft_id"))) {
//                newObject.put("nft_id", getSQL.get(i).get("nft_id"));
//                newObject.put("username", getSQL.get(i).get("username"));
//                newObject.put("nfts_sold", 1);
//                newObject.put("volume", getSQL.get(i).get("volume"));
//            }else{
//                Object freq = newObject.get("nfts_sold");
//                newObject.put("nfts_sold", (int) freq +1);
//                Object newVolume = newObject.get("volume");
//                newObject.put("volume", (double) newVolume + (double) getSQL.get(i).get("volume"));
//            }
//
//        }

        return accountRepository.getTopCreatorToday(date);
    }
}
