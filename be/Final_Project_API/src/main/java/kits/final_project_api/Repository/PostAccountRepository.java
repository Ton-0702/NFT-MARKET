package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostAccountRepository extends JpaRepository<Account, Long> {

}
