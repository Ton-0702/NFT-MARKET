package kits.final_project_api.Service.impl;

import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.TopCreatorDTO;
import kits.final_project_api.Repository.AccountRepository;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

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
//        LocalDate date_current = LocalDate.now();

        return accountRepository.getTopCreatorToday(date);
    }
}
