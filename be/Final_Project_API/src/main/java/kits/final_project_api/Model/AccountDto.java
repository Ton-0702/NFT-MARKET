package kits.final_project_api.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AccountDto {
    private Integer id;
    private String username;
    private String email;
    private String password;
    private String biography;

//    public UserDTO(String username, String email, String password, String biography) {
//        this.username = username;
//        this.email = email;
//        this.password = password;
//        this.biography = biography;
//    }
//public String getEmail() {
//        return email;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getBiography() {
//        return biography;
//    }
//
//    public void setBiography(String biography) {
//        this.biography = biography;
//    }
//
}
