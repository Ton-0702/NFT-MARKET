package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "nft_owned")
@ToString(includeFieldNames = true)
public class NFTOwned {
    @Id
    @Column(name = "nft_owned_id")
    private Long nft_owned_id;

    @JsonIgnore
    @ManyToOne(targetEntity = Account.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id") // Thông qua khóa ngoại product_id
    private Account account;

    // @JsonIgnore
    // @Column(name = "account_id")
    // private Long account_id;

    @JsonIgnore
    @ManyToOne(targetEntity = Collection.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "collection_id") // Thông qua khóa ngoại product_id
    private Collection collection;

    // @JsonIgnore
    // @Column(name = "collection_id")
    // private Long collection_id;
}
