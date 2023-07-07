package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "nft")
@NoArgsConstructor
//@Data
@Setter
@Getter
public class NFT {
    @Id
    @Column(name = "nft_id")// tao primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String image;

    @Column(columnDefinition = "DOUBLE NOT NULL")
    private Double price;

    @Column(columnDefinition = "LONGTEXT DEFAULT NULL")
    private String description;

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_create;

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_start_bid;

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_end_bid;

//    @OneToOne
//    @MapsId
//    @JoinColumn(name = "nft_id")
//    private NFTOwened nftOwened;

    @OneToOne(mappedBy = "nft", cascade = CascadeType.ALL )
    @PrimaryKeyJoinColumn
    private NFTOwened nftOwened;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<ClassifyCategory> classifyCategory;

    @JsonIgnore
    @OneToMany(mappedBy = "NFT_like_id", cascade = CascadeType.ALL)
    private List<NFTLike> nftLikes;

    @JsonIgnore
    @OneToMany(mappedBy = "nft", cascade = CascadeType.ALL)
    private List<Transaction> transactions;
}
