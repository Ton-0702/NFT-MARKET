package kits.final_project_api.Model.CreateAccount;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AccountCreateConnectWalletDTO {
    @NotNull
    @NotEmpty
    @NotBlank
    private String address_wallet;
    private String token;
    private String username;
    private String email;
    private String avatar;
    private String background;
    private String bio;
}
