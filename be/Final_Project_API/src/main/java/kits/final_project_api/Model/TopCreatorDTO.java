package kits.final_project_api.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class TopCreatorDTO {
    private String avatar;
    private String username;
//    private Double highest_bid;
    private Long nft_sold;
    private Double volume;// Volume khối lượng giao dịch. Có nghĩa la là tổng số tiền mua hoặc bán NFT cộng lại của người đó
}
