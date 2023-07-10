package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "transaction_bid")
public class Transaction {
    @Id
    @Column(name = "transaction_bid_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "nft_id") // Thông qua khóa ngoại product_id
    private NFT nft;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "account_id")
    private Account account;

    @Column(name = "highest_bid", columnDefinition = "DOUBLE DEFAULT 0")
    private Double highest_bid;

    @Column(name = "date_transaction", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_transaction;
}