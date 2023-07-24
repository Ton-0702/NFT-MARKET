package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "nft_owned")
public class NFTOwened {
//    @Id
//    @Column(name = "nft_owned_id")
//    private Long id;
    @Id
    @OneToOne
    @JoinColumn(name = "nft_id")
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
