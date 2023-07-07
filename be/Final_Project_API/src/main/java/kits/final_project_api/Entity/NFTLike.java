package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "nft_like")
public class NFTLike {
    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id") // thông qua khóa ngoại của nft_id
    private NFT nft;

    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "accountId")// thông qua khóa ngoại của account_id
    private Account account;
}
