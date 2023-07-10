package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
//    void flush();
//    @Query("SELECT c FROM Account c")
//    List<Account> getAllAccounts();
}
