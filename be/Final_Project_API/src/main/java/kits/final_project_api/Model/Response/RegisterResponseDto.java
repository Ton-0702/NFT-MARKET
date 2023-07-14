package kits.final_project_api.Model.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterResponseDto implements Serializable {
    private String message;
    private Object data;
    private String error;
    private String messageCode;
}
