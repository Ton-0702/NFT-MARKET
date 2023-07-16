package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "nft_name", columnDefinition = "TEXT")
    private String nft_name;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "image", columnDefinition = "TEXT")
    private String image;

    @NotNull
//    @NotBlank
//    @NotEmpty
    @Column(name = "price", columnDefinition = "DOUBLE NOT NULL")
    private Double price;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "description", columnDefinition = "LONGTEXT DEFAULT NULL")
    private String description;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "date_create", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_create;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "date_start_bid", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_start_bid;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(name = "date_end_bid", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_end_bid;

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
