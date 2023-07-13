package kits.final_project_api.Model;

import lombok.*;
import org.springframework.stereotype.Service;

import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class AccountDto implements Serializable {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String biography;
}
