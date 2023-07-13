package kits.final_project_api.Model.CreateAccount;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class AccountMetaMaskDto implements Serializable {
    @NotNull
    @NotBlank
    @NotEmpty
    private String address_wallet;
    @NotNull
    @NotBlank
    @NotEmpty
    private String username;
    @NotNull
    @NotBlank
    @NotEmpty
    private String password;
    @NotNull
    @NotBlank
    @NotEmpty
    private String token;
}
