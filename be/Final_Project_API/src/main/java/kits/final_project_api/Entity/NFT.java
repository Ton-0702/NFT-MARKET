package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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

    @Column(name = "nft_name", columnDefinition = "TEXT")
    private String nft_name;

    @Column(name = "image", columnDefinition = "TEXT")
    private String image;

    @Column(name = "price", columnDefinition = "DOUBLE NOT NULL")
    private Double price;

    @Column(name = "description", columnDefinition = "LONGTEXT DEFAULT NULL")
    private String description;

    @Column(name = "date_create", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_create;

    @Column(name = "date_start_bid", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_start_bid;

    @Column(name = "date_end_bid", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_end_bid;

    @Override
    public String toString() {
        return "NFT{" +
                "nft_id='" + id + '\'' +
                ", nftName=" + nft_name +
                ", image='" + image + '\'' +
                ", description='" + description + '\'' +
                ", date_create='" + date_create + '\'' +
                ", date_start_bid='" + date_start_bid + '\'' +
                ", date_end_bid='" + date_end_bid + '\'' +
                '}';
    }

//    @Column(name = "account_id", columnDefinition = "INT")
//    private Integer account_id;

//    @OneToOne
//    @MapsId
//    @JoinColumn(name = "nft_id")
//    private NFTOwened nftOwened;

//    @OneToOne
//    @PrimaryKeyJoinColumn
//    private NFTOwened nftOwened;
    @Getter
    @Setter
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    @JsonIgnore
    @OneToMany(mappedBy = "nft", cascade = CascadeType.ALL)
    private List<ClassifyCategory> classifyCategory;

    @JsonIgnore
    @OneToMany(mappedBy = "nft", cascade = CascadeType.ALL)
    private List<NFTLike> nftLikes;

    @JsonIgnore
    @OneToMany(mappedBy = "nft", cascade = CascadeType.ALL)
    private List<Transaction> transactions;
}
