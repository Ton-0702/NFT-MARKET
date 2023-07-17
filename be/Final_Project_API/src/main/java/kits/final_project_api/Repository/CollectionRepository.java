package kits.final_project_api.Repository;

import kits.final_project_api.Entity.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {
    @Query(value = "SELECT * FROM collection limit 5", nativeQuery = true)
    List<Map<String, Object>> GetAllCollection();

}
