package kits.final_project_api.Entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

//@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "categories")
public class Category {
    @Id
    @Column(name = "categories_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categories_id;

    @Column(name = "categories_name", length = 100, columnDefinition = "nvarchar(100) not null")
    private String categories_name;

    //    cascade giúp, khi xoá category thì sẽ tự động xoá hết tất cả products liên quan
    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<ClassifyCategory> classifyCategory;
}