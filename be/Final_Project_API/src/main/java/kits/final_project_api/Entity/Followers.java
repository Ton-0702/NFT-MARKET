package kits.final_project_api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "followers")
public class Followers {
    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "accountId") // Thông qua khóa ngoại account_id của bảng Account
    private Account account;

    @Id
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "accountId") // Thông qua khóa ngoại account_id của bảng Account
    private Account account_follower;
}
