package Json;

public class NftJson {
    public Long getNft_id() {
        return nft_id;
    }

    public void setNft_id(Long nft_id) {
        this.nft_id = nft_id;
    }

    public String getNft_name() {
        return nft_name;
    }

    public void setNft_name(String nft_name) {
        this.nft_name = nft_name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate_create() {
        return date_create;
    }

    public void setDate_create(String date_create) {
        this.date_create = date_create;
    }

    public String getDate_start_bid() {
        return date_start_bid;
    }

    public void setDate_start_bid(String date_start_bid) {
        this.date_start_bid = date_start_bid;
    }

    public String getDate_end_bid() {
        return date_end_bid;
    }

    public void setDate_end_bid(String date_end_bid) {
        this.date_end_bid = date_end_bid;
    }

    public Integer getAccount_id() {
        return account_id;
    }

    public void setAccount_id(Integer account_id) {
        this.account_id = account_id;
    }

    private Long nft_id;
    private String nft_name;
    private String image;
    private Double price;
    private String description;
    private String date_create;
    private String date_start_bid;
    private String date_end_bid;
    private Integer account_id;

}
