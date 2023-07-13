package kits.final_project_api.Model.CreateAccount;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AccountCreateDTO implements Serializable {
    @NotNull
    @NotBlank
    @NotEmpty
    private String username;
    private String email;
    private String password;
}
