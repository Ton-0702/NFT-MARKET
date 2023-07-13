
import styled from "styled-components";
import background from "../../assets/SignIn_Up_Img/background_sign_up.svg";
import { Input } from "components/Input";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const StyledSignInPage = styled.div`
  a {
    text-decoration: none;
  }

  .main {
    height: 100vh;
    position: relative;

    background: linear-gradient(
      179.4deg,
      rgb(12, 20, 69) -16.9%,
      rgb(71, 30, 84) 119.9%
    );
  }

  .login-container {
    max-width: 1920px;
  }

  .login-form-wrap {
    width: 1050px;
    display: flex;
    border-radius: 2rem;
    box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* padding-bottom: 40px; */
    /* margin: auto; */
    background-color: #fff;
  }

  .login__left,
  .login__right {
    width: 50%;
  }

  /* Login Left */
  .login__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }

  .login-content {
    margin: 0 auto;
  }

  .login-title {
    margin-top: 80px;
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
  }

  .form-control {
    min-width: 478px;
  }

  .form-control .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-bottom: 20px; */
  }

  .form-group label {
    font-weight: 300;
  }

  .form-label {
    display: flex;
    justify-content: space-between;
  }

  .form-group .form-label-forgot-password {
    opacity: 0.6;
    cursor: pointer;
  }

  .form-group input {
    width: 100%;
    height: 46px;
    border-radius: 6px;
    border: none;
    background-color: #c0dbea;
    padding-left: 10px;
  }

  .form-password {
    position: relative;
  }

  .form-password-message {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: red;
    font-size: 14px;
  }

  .eyes-open {
    display: block;
  }

  .eyes-close,
  .eyes-open {
    position: absolute;
    top: 68%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #171648;
  }

  .d-none {
    display: none;
  }

  .d-block {
    display: block;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
  }

  .btn-login {
    width: 150px;
    height: 46px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background-color: #171648;
    cursor: pointer;
  }

  .btn p.or {
    color: #6096b4;
  }

  .btn-social {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .social-group {
    width: 125px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-group button {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #6096b4;
    border-radius: 20px;
    cursor: pointer;
  }

  .dont-have-account {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .dont-have-account-text {
    margin-bottom: 40px;
  }

  .dont-have-account-text a {
    margin-left: 20px;
    color: var(#d885a3);
  }

  /*  Login right */
  .login__right {
    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 450px;

    background-image: url(${background});
    background-size: cover;
    z-index: -1;
    border-radius: 2rem;
  }

  .login-right-wrap .images {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 500px;
    height: 500px;
    z-index: 20;
  }

  .girl-laptop {
    width: 100%;
  }

  .input_error {
    color: red;

    text-align: left;
    font-size: 14px;
    font-weight: 600;
    align-items: c;
  }
  #password {
    position: relative;
  }
  .err-msg span {
    position: absolute;
  }
  .input-form {
    padding-bottom: 20px;
  }

  /* Responsive */
  /* extra large */

  @media (max-width: 991.98px) {
    .login-form-wrap {
      width: 90%;
      height: 60%;
    }
    .login-content {
      width: 80%;
    }
    .input-form {
      width: 80%;
    }
    .input-form div {
      height: 80%;
    }
    .login__right {
      width: 50%;
    }
    .background {
      width: 75%;
      height: 101%;
    }
    .login-title {
      margin-top: 0px;
    }
    .dont-have-account-text {
      width: 96%;
    }
    .form-control .form-group .form-password input {
      width: 90%;
    }
    .btn {
      width: 80%;
    }
  }
  @media (max-width: 767.98px) {
    .login__right {
      display: none;
    }
    .login-title {
      padding-top: 80px;
      /* height: 100%; */
    }
    .login-content {
      width: 70%;
    }

    .login__left {
      width: 100%;
      justify-content: center;
    }
    .form-control {
      min-width: 0;
    }
    .input-form {
      width: 100%;
    }
    .background {
      background-size: cover;
      width: 79%;
    }
    .btn {
      width: 100%;
      margin-bottom: 0;
    }
  }
  @media (max-width: 575.98px) {
    .login-title {
      font-size: 30px;
    }
  }
`;

export const SignInPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    const eyesClose = document.querySelector('.eyes-close');
    const eyesOpen = document.querySelector('.eyes-open');
    if (passwordShown === false) {
      eyesClose.classList.add('d-none');
      eyesOpen.classList.add('d-block');
    } else {
      eyesClose.classList.remove('d-none');
      eyesOpen.classList.remove('d-block');
    }
  };
  const ValidateSignIn = (e) => {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError(true);
    }
    console.log('username: ' + username);
    console.log('password: ' + password);
  };
  return (
    <StyledSignInPage>
      <div className="main">
        <div className="login-container">
          <div className="login-form-wrap">
            <div className="login__left">
              <div className="login-content">
                <h2 className="login-title">Log In</h2>

                <form action="#" className="form-control">
                  <div className="input-form">
                    <div className="form-group">
                      <label>Username</label>
                      <Input
                        placeHolder="Username"
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                      ></Input>
                      <span className="form-message"></span>
                    </div>
                    <div className="err-msg-username">
                      {error && username <= 0 ? (
                        <span className="input_error">Enter Username</span>
                      ) : (
                        <span style={{height: 10}}> </span>
                      )}
                    </div>
                    <div className="form-group form-password">
                      <div className="form-label">
                        <label className="form-label-password">Password</label>
                        <label className="form-label-forgot-password">
                          Forgot Password?
                        </label>
                      </div>

                      <Input
                        placeHolder="Enter password"
                        id="password"
                        type={passwordShown ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                      {/* <i
                      className="fa-solid fa-eye eyes-open"
                      onClick={togglePassword}
                    ></i> */}
                      <div className="err-msg">
                        {error && password <= 0 ? (
                          <span className="input_error">Enter Password</span>
                        ) : (
                          ''
                        )}
                      </div>

                      <i
                        className="fa-solid fa-eye-slash eyes-close"
                        onClick={togglePassword}
                      ></i>
                      <i
                        className="fa-solid fa-eye eyes-open"
                        onClick={togglePassword}
                      ></i>
                      <span className="form-password-message"></span>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      type="button"
                      className="btn-login"
                      onClick={ValidateSignIn}
                    >
                      LOGIN
                      <i className="fas fa-arrow-right"></i>
                    </button>

                    <div className="dont-have-account">
                      <p className="dont-have-account-text">
                        Don't have an account yet?
                        <NavLink to="/sign-up">Sign up for free</NavLink>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="login__right">
              <div className="login-right-wrap">
                <div className="background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSignInPage>
  );
};
