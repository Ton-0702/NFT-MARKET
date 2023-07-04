import styled from "styled-components";
import background from "../../assets/SignIn_Up_Img/background_sign_up.svg";
import { Input } from "components/Input";
import user_icon from "../../assets/SignIn_Up_Img/user_icon.svg";
import mail_icon from "../../assets/SignIn_Up_Img/mail_icon.svg";
import password_icon from "../../assets/SignIn_Up_Img/password_icon.svg";
import { Button } from "components/Button";
import ValidateSignUp from "./SignUpValidate";
const StyledSignUpPage = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
  }
  .left-sign-up {
    float: left;
    height: 100%;
    width: 50%;
    /* padding-right: 30px; */
  }
  .left-sign-up img {
    width: 100%;
    height: 100%;
  }
  .right-sign-up {
    float: right;
    height: 100%;
    width: 50%;
    /* padding-left: 30px; */
  }
  .right-sign-up h2 {
    color: white;
    font-size: 51px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    text-transform: capitalize;
  }
  .right-sign-up p {
    font-size: 22px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
    color: white;
    padding-top: 20px;
  }
  .form-sign-up {
    padding: 100px 300px 100px 60px;
  }
  form {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding-bottom: 60px;
  }
`;

export const SignUpPage = () => {
  // const ValidateSignUp = () => {
  //     console.log("kasdasd");
  //     var id_Username = document.getElementById("username");
  //     console.log(id_Username);
  //   var id_EmailAddress = document.getElementById("email_address");
  //   var id_Password = document.getElementById("password");
  //   var id_ConfirmPassword = document.getElementById("confirm_password");
  //   if (id_Username.value == "" || id_Username.value == null) {
  //     id_Username.classList.add("alert-input");
  //   }
  //   if (id_EmailAddress.value == "" || id_EmailAddress.value == null) {
  //     id_EmailAddress.classList.add("alert-input");
  //   }
  //   if (id_Password.value == "" || id_Password.value == null) {
  //     id_Password.classList.add("alert-input");
  //   }
  //   if (id_ConfirmPassword.value == "" || id_ConfirmPassword.value == null) {
  //     id_ConfirmPassword.classList.add("alert-input");
  //   }
  //   };
  // const
  return (
    <StyledSignUpPage>
      <div className="wrapper">
        <div className="left-sign-up">
          <img src={background} alt="" />
        </div>
        <div className="right-sign-up">
          <div className="form-sign-up">
            <h2>Create account</h2>
            <p>
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
            <form
              action="#"
              id="form_sign_up"
              class="form_sign_up"
              name="form_sign_up"
              onsubmit={ValidateSignUp}
            >
              <Input
                placeHolder="Username"
                background="white"
                textColor="#2B2B2B"
                fontSize="16px"
                fontWeight="400px"
                borderRadius="20px"
                // border="1px solid #858584";
                img={user_icon}
                width="330px"
                height="46px"
                // border="none"
                id="username"
                className="username"
              ></Input>
              {/* {err && <span className="input_error">lôi</span>} */}
              <span className="input_error">lôi</span>
              <Input
                placeHolder="Email Address"
                background="white"
                textColor="#2B2B2B"
                fontSize="16px"
                fontWeight="400px"
                borderRadius="20px"
                // border="1px solid #858584";
                img={mail_icon}
                width="330px"
                height="46px"
                id="email_address"
                className="email_address"
              ></Input>
              <Input
                placeHolder="Password"
                background="white"
                textColor="#2B2B2B"
                fontSize="16px"
                fontWeight="400px"
                borderRadius="20px"
                // border="1px solid #858584";
                img={password_icon}
                width="330px"
                height="46px"
                type="password"
                id="password"
                className="password"
              ></Input>
              <Input
                placeHolder="Confirm Password"
                background="white"
                textColor="#2B2B2B"
                fontSize="16px"
                fontWeight="400px"
                borderRadius="20px"
                // border="1px solid #858584";
                img={password_icon}
                width="330px"
                height="46px"
                type="password"
                id="confirm_password"
                className="confirm_password"
              ></Input>
            </form>
            <button type="submit" onClick={ValidateSignUp}>
              hfdsfkjhskjhfkjshfkjhfddfkjfhg
            </button>

            {/* <Button onSubmit={ValidateSignUp}
              content="Create Account"
              bgColor="#A259FF"
              width="330px"
              padding="20px 126px"
              borderRadius="20px"
              textColor="white"
              fontSize="16px"
              fontWeight="600"
              type="submit"
            ></Button> */}
          </div>
        </div>
      </div>
    </StyledSignUpPage>
  );
};
