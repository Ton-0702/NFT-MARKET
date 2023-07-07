package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "transaction_bid")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id") // Thông qua khóa ngoại product_id
    private NFT nft;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "accountId")
    private Account account;

    @Column(columnDefinition = "DOUBLE DEFAULT 0")
    private Double highest_bid;

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP()")
    private String date_transaction;
}