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
public class CheckAddressWalletDTO {
    @NotNull
    @NotEmpty
    @NotBlank
    private String address_wallet;
}
