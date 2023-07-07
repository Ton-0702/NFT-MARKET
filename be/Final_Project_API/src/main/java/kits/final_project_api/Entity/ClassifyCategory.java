package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "classify_category")
public class ClassifyCategory {
    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id") // Thong qua khoa ngoai categories_id giua 2 table là "Categories" và "classify_category"
    private Category category;

    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id") // Thông qua khóa ngoại nft_id giữa 2 table là "nft" và "classify_category;"
    private NFT nft;
}
