package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "account")
@NoArgsConstructor
//@Data // lombok giúp generate các hàm constructor, get, set v.v.
@Getter
@Setter
public class Account implements Serializable {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer account_id;\


    public Account(Long accountId, String username, String email, String password, String biography) {
        this.accountId = accountId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.biography = biography;
    }

    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "username", columnDefinition = "varchar(150) not null")
    private String username;

    @Column(name = "email", columnDefinition = "varchar(200) not null")
    private String email;

    @Column(name = "avatar", columnDefinition = "varchar(200) not null")
    private String avatar;

    @Column(name = "password", columnDefinition = "varchar(200) not null")
    private String password;

    @Column(name = "biography", columnDefinition = "TEXT DEFAULT NULL")
    private String biography;

    @JsonIgnore
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private List<NFT> ntfs;

    public Account less() {
        return new Account(this.accountId, this.username, this.email, this.password, this.biography);
    }

    @JsonIgnore
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Followers> account_have_fl;

    @JsonIgnore
    @OneToMany(mappedBy = "account_follower", cascade = CascadeType.ALL)
    private List<Followers> followers;

    @JsonIgnore
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY) // MappedBy trỏ tới tên biến product ở trong ProductOwend.
    private List<NFTOwened> nftOwens;

    @JsonIgnore
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Transaction> transactions;

    @JsonIgnore
    @OneToMany(mappedBy = "account")
    private List<NFTLike> nftLikes;




//    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
//    private List<NFT> ntfs;
//    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL) // Quan hệ 1-n với đối tượng ở dưới (Person) (1 địa điểm có nhiều người ở)
//    private List<NFT> account_nft_ps;



//    @OneToMany(mappedBy = "account_user_follow_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Followers> account_user_follow_ids = new ArrayList<>();
//
//    @OneToMany(mappedBy = "account_followers_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Followers> account_followers_ids = new ArrayList<>();
//
//    @OneToMany(mappedBy = "account_nft_owned", cascade = CascadeType.ALL, fetch = FetchType.LAZY) // MappedBy trỏ tới tên biến product ở trong ProductOwend.
//    private List<NFTOwened> account_nft_owned_s = new ArrayList<>();
//
//    @OneToMany(mappedBy = "account_transaction_bid", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Transaction> account_transaction_bids = new ArrayList<>();
//
//    @OneToMany(mappedBy = "account_NFT_like_id", fetch = FetchType.LAZY)
//    private List<NFTLike> account_NFT_like_ids = new ArrayList<>();

}
