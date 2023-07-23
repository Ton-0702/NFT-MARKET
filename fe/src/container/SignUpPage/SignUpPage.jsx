import styled from 'styled-components';
import background from '../../assets/SignIn_Up_Img/background_sign_up.svg';
import {useState} from 'react';
import {colors} from 'Global';
import {LogoItem} from 'components/Header';

const StyledSignUpPage = styled.div`
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

  .signup-container {
    max-width: 1920px;
  }

  .signup-form-wrap {
    width: 1050px;
    display: flex;
    border-radius: 2rem;
    box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }

  .signup__left,
  .signup__right {
    width: 50%;
  }
  .signup__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }

  .signup-content {
    margin: 40px auto;
    /* margin-bottom: 40px; */
  }

  .header-logo-text svg path {
    fill: #a259ff;
  }

  .signup-title {
    margin: 22px 0;
    text-align: center;
    font-size: 38px;
    font-weight: 600;
  }

  .form-control {
    min-width: 478px;
  }

  .form-control .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 26px;
    position: relative;
    height: 48px;
  }

  /* .form-label {
    display: flex;
    justify-content: space-between;
  } */

  .form-group input {
    text-indent: 12px;
    font-size: 100%;
    /* padding: 12px; */
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    /* background-color: transparent; */
    border-radius: 20px;
    height: 46px;
    text-indent: 12px;
    outline: none;
  }
  .form-group input:-webkit-autofill {
    transition: background-color 5000s;
    -webkit-fill-color: #fff;
  }

  .form-group label {
    position: absolute;
    left: 0;
    font-weight: 400px;
    font-size: 16px;
    padding: 12px;
    margin-left: 8px;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
    border-radius: 12px;
  }

  .form-group :is(input:focus, input:valid) ~ label {
    transform: translateY(-50%) scale(0.9);
    /* margin: 0 */
    margin-left: 20px;
    /* padding: 8px; */
    background-color: ${colors.whiteColor};
    font-weight: 500;
    color: ${colors.blackColor};
    border-radius: 12px;
    padding: 0;
  }

  .form-group :is(input:focus, input:valid) {
    border-color: rgb(150, 150, 200);
  }

  .form-group .form-label-forgot-password {
    opacity: 0.6;
    cursor: pointer;
  }

  /* .form-group input {
    width: 100%;
    height: 46px;
    border-radius: 6px;
    border: none;
    background-color: #c0dbea;
    padding-left: 10px;
  } */

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
  .eyes-open-password {
    display: block;
  }
  .eyes-close-password,
  .eyes-open-password {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #171648;
  }

  .eyes-close,
  .eyes-open {
    position: absolute;
    top: 50%;
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

  .btn-signup {
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

  /*  signup right */
  .signup__right {
    position: relative;
  }

  .background {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 450px;
    background-image: url(${background});
    background-size: auto;
    background-position: center;
    z-index: -1;
    border-radius: 2rem;
    background-repeat: no-repeat;
  }

  .signup-right-wrap .images {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 500px;
    height: 500px;
    z-index: 20;
  }
  /* 
  .girl-laptop {
    width: 100%;
  } */

  .input_error {
    color: red;
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
  }
  #password {
    position: relative;
  }
  .err-msg span {
    /* position: absolute; */
    padding-bottom: 20px;
  }
  .input-form {
    padding-bottom: 20px;
  }
  .show-hide-password {
    position: absolute;
    top: 42px;
    /* right: 64px; */
    left: 480px;
  }

  // Loading
  .dashed-loading {
    position: relative;
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }

  .dashed-loading:after,
  .dashed-loading:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .dashed-loading:before {
    z-index: 5;
    border: 3px dashed #ff6bcb;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }

  .dashed-loading:after {
    z-index: 10;
    border: 3px solid #ffb86c;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }

  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
  // Responsive

  @media (max-width: 991.98px) {
    .signup-form-wrap {
      width: 90%;
      height: 95%;
    }
    .signup-content {
      width: 80%;
    }
    .input-form {
      width: 80%;
    }
    .input-form div {
      height: 80%;
    }
    .signup__right {
      width: 50%;
    }
    .background {
      width: 75%;
    }
    .signup-title {
      margin-top: 0px;
    }
    .dont-have-account-text {
    }
  }
  @media (max-width: 767.98px) {
    .signup__right {
      display: none;
    }
    .signup-title {
      /* justify-content: center; */
    }
    .signup-content {
      width: 70%;
    }

    .signup__left {
      width: 100%;
    }
    .form-control {
      min-width: 0;
    }
    .input-form {
      width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .signup-title {
      font-size: 30px;
    }
  }
`;

export const SignUpPage = () => {
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validateValues = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Not Valid email!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 8) {
      errors.password = 'Must be more than 8 characters!';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'ConfirmPassword is required!';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password is not match';
    }
    console.log('Err:', errors);

    return errors;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log(name, value);
    setFormValue((prevState) => ({...prevState, [name]: value}));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
    setFormErrors(validateValues(formValue));
    // setIsSubmitting(true);
    const isFormValid = Object.keys(formErrors).length === 0;
    console.log('isVAlid:', isFormValid);
    if (isFormValid) {
      handleLoading();
    }
  };

  const handleLoading = () => {
    setTimeout(() => {
      setIsSubmitting(true);
    }, 2000);
    setIsSubmitting(false);
  };

  function togglePassword() {
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
  }

  function togglePasswordConfirm() {
    setPasswordConfirm(!passwordConfirm);
    const eyesOpen = document.querySelector('.eyes-confirm-open');
    const eyesClose = document.querySelector('.eyes-confirm-close');
    if (passwordConfirm === false) {
      eyesClose.classList.add('d-none');
      eyesOpen.classList.add('d-block');
    } else {
      eyesClose.classList.remove('d-none');
      eyesOpen.classList.remove('d-block');
    }
  }
  return (
    <StyledSignUpPage>
      <div className="main">
        <div className="signup-container">
          <div className="signup-form-wrap">
            <div className="signup__left">
              <div className="signup-content">
                <LogoItem></LogoItem>
                <h2 className="signup-title">Create Account</h2>

                <form action="#" className="form-control">
                  <div className="input-form">
                    {/* Username */}
                    <div className="form-group">
                      {/* <Input></Input> */}
                      <input
                        name="username"
                        type="text"
                        value={formValue.username}
                        required
                        onChange={handleChange}
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="username">Username</label>
                      {formErrors.username && (
                        <span className="input_error">
                          {formErrors.username}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <input
                        name="email"
                        type="text"
                        value={formValue.email}
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email</label>
                      {formErrors.email && (
                        <span className="input_error">{formErrors.email}</span>
                      )}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                      {/* <Input></Input> */}
                      <input
                        name="password"
                        value={formValue.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={handleChange}
                        className="password"
                        type={passwordShown ? 'text' : 'password'}
                        required
                      />
                      <label htmlFor="password">Password</label>
                      <i
                        className="fa-solid fa-eye-slash eyes-close"
                        onClick={togglePassword}
                      ></i>
                      <i
                        className="fa-solid fa-eye eyes-open"
                        onClick={togglePassword}
                      ></i>

                      {formErrors.password && (
                        <span className="input_error">
                          {formErrors.password}
                        </span>
                      )}
                    </div>

                    {/* ConfirmPassword */}
                    <div className="form-group">
                      {/* <Input></Input> */}

                      <input
                        name="confirmPassword"
                        value={formValue.confirmPassword}
                        className="confirm-password"
                        onChange={handleChange}
                        type={passwordConfirm ? 'text' : 'password'}
                        required
                      />
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <i
                        className="fa-solid fa-eye-slash eyes-close eyes-confirm-close"
                        onClick={togglePasswordConfirm}
                      ></i>
                      <i
                        className="fa-solid fa-eye eyes-open eyes-confirm-open"
                        onClick={togglePasswordConfirm}
                      ></i>

                      {formErrors.confirmPassword && (
                        <span className="input_error">
                          {formErrors.confirmPassword}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      type="button"
                      className="btn-signup"
                      onClick={handleSubmitForm}
                    >
                      {isSubmitting ? (
                        <div className="dashed-loading"></div>
                      ) : (
                        <span>
                          Sign Up
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      )}
                    </button>

                    {/* <div className="dont-have-account">
                      <p className="dont-have-account-text">
                        You have an account?
                        <NavLink to="/sign-in">Sign in now</NavLink>
                      </p>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>

            <div className="signup__right">
              <div className="signup-right-wrap">
                <div className="background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSignUpPage>
  );
};
