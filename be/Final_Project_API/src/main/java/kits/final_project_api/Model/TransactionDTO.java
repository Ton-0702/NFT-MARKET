package kits.final_project_api.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class TransactionDTO implements Serializable {
    private Long id;
    private Long nft_id;
    private Long account_id;
    private Double highest_bid;
    private String date_transaction;
}
