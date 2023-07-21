package kits.final_project_api.Model;

import lombok.*;

import java.io.Serializable;

//@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseDTO implements Serializable {
    private String message;
    private String data;
    private String error;
    private String error_code;
}
