package kits.final_project_api.Model;

import lombok.*;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class AccountDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String biography;
}
