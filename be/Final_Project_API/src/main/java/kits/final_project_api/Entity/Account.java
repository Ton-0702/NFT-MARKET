package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "account")
@NoArgsConstructor
@AllArgsConstructor
//@Data // lombok giúp generate các hàm constructor, get, set v.v.
@Getter
@Setter
public class Account implements Serializable {
    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "address_wallet", columnDefinition = "varchar(150) not null unique")
    private String address_wallet;

    @Column(name = "username", columnDefinition = "varchar(150) not null default 'Unnamed'")
    private String username;

    @Column(name = "email", columnDefinition = "varchar(200) not null")
    private String email;

    @Column(name = "avatar", columnDefinition = "varchar(200) not null")
    private String avatar;

    @Column(name = "background", columnDefinition = "TEXT default null")
    private String background;

    @Column(name = "token", columnDefinition = "TEXTvarchar(200) default NULL unique")
    private String token;

    @Column(name = "password", columnDefinition = "varchar(100) not null")
    private String password;

    @Column(name = "biography", columnDefinition = "TEXT DEFAULT NULL")
    private String biography;

    @JsonIgnore
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<NFT> ntfs;

//    public Account less() {
//        return new Account(this.accountId, this.username, this.email, this.password, this.biography);
//    }

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
}
