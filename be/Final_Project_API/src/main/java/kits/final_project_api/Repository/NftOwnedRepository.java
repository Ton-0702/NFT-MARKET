package kits.final_project_api.Repository;

import kits.final_project_api.Entity.NFTOwned;
import org.hibernate.annotations.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Map;

@Repository
public interface NftOwnedRepository extends JpaRepository<NFTOwned, Long> {

    // void CreateNftOwned(@Valid Long account_id, Long collection_id);
}
