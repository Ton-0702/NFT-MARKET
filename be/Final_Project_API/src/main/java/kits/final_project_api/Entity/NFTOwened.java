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
    @MapsId
    @JoinColumn(name = "nft_id")
    private NFT nft;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "accountId")
    private Account account;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id")
    private Collection collection;
}
