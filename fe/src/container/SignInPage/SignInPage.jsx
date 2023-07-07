// import styled from 'styled-components';
// import background from '../../assets/SignIn_Up_Img/background_sign_up.svg';
// import {Input} from 'components/Input';
// // import user_icon from "../../assets/SignIn_Up_Img/user_icon.svg";
// // import mail_icon from "../../assets/SignIn_Up_Img/mail_icon.svg";
// // import password_icon from "../../assets/SignIn_Up_Img/password_icon.svg";
// // import { Button } from "components/Button";
// // import ValidateSignUp from "./SignUpValidate";
// import {useState} from 'react';
// const StyledSignInPage = styled.div`
//   /* * {
//     margin: 0;
//     padding: 0;
//   }
//   .wrapper {
//   }
//   .left-sign-up {
//     float: left;
//     height: 100%;
//     width: 50%;

//   }
//   .left-sign-up img {
//     width: 100%;
//     height: 100%;
//   }
//   .right-sign-up {
//     float: right;
//     height: 100%;
//     width: 50%;

//   }
//   .right-sign-up h2 {
//     color: white;
//     font-size: 51px;
//     font-family: Work Sans;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 110%;
//     text-transform: capitalize;
//   }
//   .right-sign-up p {
//     font-size: 22px;
//     font-family: Work Sans;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 160%;
//     text-transform: capitalize;
//     color: white;
//     padding-top: 20px;
//   }
//   .form-sign-up {
//     padding: 100px 300px 100px 60px;
//   }
//   form {

//     display: flex;
//     flex-direction: column;

//     padding-bottom: 60px;
//   }
//   .input_error {
//     color: red;

//     text-align: left;
//     font-size: 14px;
//     font-weight: 300;
//     align-items: c;
//   }
//   .input-and-error {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     text-align: center;
//     height: 60px;
//     position: relative;
//   }
//   .err-msg {
//     position: absolute;
//     top: 39px;
//     left: 420px;
//   } */
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   :root {
//     /* --color-1: #c0dbea; */
//     --color-2: #6096b4;
//     --black-color: #000;
//     /* --btn-color: #d885a3; */
//   }

//   body {
//     font-family: 'Poppins', sans-serif;
//     font-size: 16px;
//   }

//   a {
//     text-decoration: none;
//   }

//   .main {
//     height: 100vh;
//     position: relative;
//     /* z-index: -1; */
//     background: linear-gradient(
//       179.4deg,
//       rgb(12, 20, 69) -16.9%,
//       rgb(71, 30, 84) 119.9%
//     );
//   }

//   .login-container {
//     max-width: 1920px;
//   }

//   .login-form-wrap {
//     width: 1050px;
//     display: flex;
//     border-radius: 2rem;
//     box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.1);
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     /* padding-bottom: 40px; */
//     /* margin: auto; */
//     background-color: #fff;
//   }

//   .login__left,
//   .login__right {
//     width: 50%;
//   }

//   /* Login Left */
//   .login__left {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 30px;
//   }

//   .login-content {
//     margin: 0 auto;
//   }

//   .login-title {
//     margin-top: 80px;
//     font-size: 51px;
//     font-style: normal;
//     font-weight: 600;
//   }

//   .form-control {
//     min-width: 478px;
//   }

//   .form-control .form-group {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     margin-bottom: 20px;
//   }

//   .form-group label {
//     font-weight: 300;
//   }

//   .form-label {
//     display: flex;
//     justify-content: space-between;
//   }

//   .form-group .form-label-forgot-password {
//     opacity: 0.6;
//     cursor: pointer;
//   }

//   .form-group input {
//     width: 100%;
//     height: 46px;
//     border-radius: 6px;
//     border: none;
//     background-color: #c0dbea;
//     padding-left: 10px;
//   }

//   .form-password {
//     position: relative;
//   }

//   .form-password-message {
//     position: absolute;
//     bottom: -20px;
//     left: 0;
//     color: red;
//     font-size: 14px;
//   }

//   .eyes-open {
//     display: none;
//   }

//   .eyes-close,
//   .eyes-open {
//     position: absolute;
//     top: 68%;
//     right: 20px;
//     transform: translateY(-50%);
//     cursor: pointer;
//     color: #d885a3;
//   }

//   .d-none {
//     display: none;
//   }

//   .d-block {
//     display: block;
//   }

//   .btn {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 40px;
//   }

//   .btn-login {
//     width: 150px;
//     height: 46px;
//     border: none;
//     border-radius: 20px;
//     color: #fff;
//     background-color: #d885a3;
//     cursor: pointer;
//   }

//   .btn p.or {
//     color: #6096b4;
//   }

//   .btn-social {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//   }

//   .social-group {
//     width: 125px;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .social-group button {
//     width: 100%;
//     height: 100%;
//     background-color: #fff;
//     border: 1px solid #6096b4;
//     border-radius: 20px;
//     cursor: pointer;
//   }

//   .dont-have-account {
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//   }

//   .dont-have-account-text {
//     margin-bottom: 40px;
//   }

//   .dont-have-account-text a {
//     margin-left: 20px;
//     color: var(#d885a3);
//   }

//   /*  Login right */
//   .login__right {
//     position: relative;
//   }

//   .background {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 450px;
//     /* background-color: #c0dbea; */
//     background-image: url(${background});
//     background-size: cover;
//     z-index: -1;
//     border-radius: 2rem;
//   }

//   .login-right-wrap .images {
//     position: absolute;
//     top: 50%;
//     right: 4px;
//     transform: translate(-50%, -50%);
//     display: flex;
//     width: 500px;
//     height: 500px;
//     z-index: 20;
//   }

//   .girl-laptop {
//     width: 100%;
//   }

//   /* Responsive */
//   /* extra large */
//   @media (max-width: 1200px) {
//     .login-form-wrap {
//       width: 994px;
//     }

//     .login-title {
//       margin-top: 30px;
//       font-size: 52px;
//       text-align: center;
//     }

//     .form-control {
//       min-width: 416px;
//     }

//     /* right */
//     .login-right-wrap .images {
//       width: 400px;
//       height: 500px;
//     }

//     .login-right-wrap .images {
//       top: 58%;
//     }

//     .girl-laptop img {
//       width: 500px;
//       height: 400px;
//     }

//     .cactus img {
//       width: 200px;
//       height: 400px;
//     }
//   }

//   /* Large */
//   @media (max-width: 992px) {
//     .login-form-wrap {
//       width: 854px;
//     }

//     .form-control {
//       min-width: 370px;
//     }

//     .btn {
//       row-gap: 24px;
//     }

//     /* right */
//     .login-right-wrap .images {
//       width: 324px;
//       height: 486px;
//     }

//     .girl-laptop img {
//       width: 392px;
//       height: 400px;
//     }

//     .cactus img {
//       width: 166px;
//       height: 400px;
//     }
//   }

//   @media (max-width: 576px) {
//     .login-form-wrap {
//       width: 450px;
//     }

//     .login__left {
//       width: 100%;
//     }

//     .login__right {
//       display: none;
//     }
//   }
// `;

// export const SignInPage = () => {
//   const [username, setUsername] = useState('');
//   const [email_address, setEmailAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm_password, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const eyesClose = document.querySelector('.eyes-close');
//   const eyesOpen = document.querySelector('.eyes-open');
//   const inputPassword = document.querySelector('#password');
//   const showPassword = () => {
//     inputPassword.type = 'text';
//     eyesClose.classList.add('d-none');
//     eyesOpen.classList.add('d-block');
//   };

//   const hidePassword = () => {
//     inputPassword.type = 'password';
//     eyesClose.classList.remove('d-none');
//     eyesOpen.classList.remove('d-block');
//   };
//   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const ValidateSignUp = (e) => {
//     e.preventDefault();
//     if (
//       username.length === 0 ||
//       email_address ||
//       password.length === 0 ||
//       confirm_password.length === 0 ||
//       password !== confirm_password ||
//       !emailPattern.test(email_address)
//     ) {
//       setError(true);
//     }
//     // if (password.value != confirm_password.value) {
//     //   setError(true);
//     // }
//     console.log('username: ' + username);
//     console.log('password: ' + password);
//     console.log('confirm_password: ' + confirm_password);
//   };
//   return (
//     <StyledSignInPage>
//       <div class="main">
//         <div class="login-container">
//           <div class="login-form-wrap">
//             <div class="login__left">
//               <div class="login-content">
//                 <h2 class="login-title">Log In</h2>

//                 <form action="#" class="form-control">
//                   <div class="form-group">
//                     <label for="">Username</label>
//                     {/* <input
//                       type="text"
//                       name=""
//                       id="username"
//                       placeholder="Username"
//                     /> */}
//                     <Input
//                       placeHolder="Username"
//                       type="text"
//                       id="username"
//                     ></Input>
//                     <span class="form-message"></span>
//                   </div>

//                   <div class="form-group form-password">
//                     <div class="form-label">
//                       <label class="form-label-password" for="">
//                         Password
//                       </label>
//                       <label class="form-label-forgot-password" for="">
//                         Forgot Password?
//                       </label>
//                     </div>
//                     {/* <input
//                       type="password"
//                       name=""
//                       id="password"
//                       placeholder="Enter password"
//                     /> */}
//                     <Input
//                       type="password"
//                       placeHolder="Enter password"
//                       id="password"
//                     ></Input>
//                     <i
//                       className="fa-solid fa-eye-slash eyes-close"
//                       onClick={showPassword}
//                     ></i>
//                     <i
//                       className="fa-solid fa-eye eyes-open"
//                       onClick={hidePassword}
//                     ></i>
//                     <span className="form-password-message"></span>
//                   </div>

//                   <div className="btn">
//                     <button
//                       type="button"
//                       className="btn-login"
//                       // onclick="logIn()"
//                     >
//                       LOGIN
//                       <i className="fas fa-arrow-right"></i>
//                     </button>

//                     <div className="dont-have-account">
//                       <p className="dont-have-account-text">
//                         Don't have an account yet?
//                         <a href="#">Sign up for free</a>
//                       </p>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="login__right">
//               <div className="login-right-wrap">
//                 <div className="background"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </StyledSignInPage>
//   );
// };
