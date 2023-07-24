package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
// @Data
@Getter
@Setter
@Table(name = "transaction_bid")
public class Transaction {
    @Id
    @Column(name = "transaction_bid_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "nft_id", insertable = false, updatable = false) // Thông qua khóa ngoại product_id
    private NFT nft;

    @Column(name = "nft_id")
    private Long nft_id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "account_id", insertable = false, updatable = false)
    private Account account;

    @Column(name = "account_id")
    private Long account_id;

    @Column(name = "highest_bid", columnDefinition = "DOUBLE DEFAULT 0")
    private Double highest_bid;

    @Column(name = "date_transaction", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    // @Temporal(TemporalType.TIMESTAMP)
    private String date_transaction;
}