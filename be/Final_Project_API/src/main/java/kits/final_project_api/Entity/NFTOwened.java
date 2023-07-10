package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "nft_owned")
public class NFTOwened {
    @Id
    @Column(name = "nft_owned_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "nft_id")
//    @JoinColumn(name = "nft_id")
    private NFT nft_owned_id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "account_id")
    private Account account;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "collection_id")
    private Collection collection;
}
