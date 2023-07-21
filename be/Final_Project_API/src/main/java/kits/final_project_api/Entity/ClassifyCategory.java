package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
//@Data
@Setter
@Getter
@Table(name = "classify_category")
public class ClassifyCategory {
//    @Id
//    @Column(name = "categories_id")
//    private Long categories_id;
//
//    @Id
//    @Column(name = "nft_id")
//    private Long nft_id;
//
//    @ManyToOne()
//    @JoinColumn(name = "categories_id") // Thong qua khoa ngoai categories_id giua 2 table là "Categories" và "classify_category"
//    private Category category;
//
//    @ManyToOne()
//    @JoinColumn(name = "nft_id") // Thông qua khóa ngoại nft_id giữa 2 table là "nft" và "classify_category;"
//    private NFT nft;

    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "categories_id") // Thong qua khoa ngoai categories_id giua 2 table là "Categories" và "classify_category"
    private Category category;

    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "nft_id") // Thông qua khóa ngoại nft_id giữa 2 table là "nft" và "classify_category;"
    private NFT nft;
}
