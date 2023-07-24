import {PrimaryLayout} from 'components/Layout';
import styled from 'styled-components';
import {colors} from 'Global';

import login_success from '../../assets/LoginSuccess/store_roof_lap.png';
import {Button} from 'components/Button';

const LoginSuccessStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .container_login_success {
    padding: 30px;
    width: 650px;
  }

  .container_login_success .login_success {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .progressbar {
    counter-reset: step;
    width: 100%;
    display: flex;
  }

  .progressbar li {
    position: relative;
    list-style: none;
    width: 33.33%;
    text-align: center;
    font-size: 16px;
    z-index: 1;
  }

  /* Circles */
  .progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 40px;
    height: 40px;
    border: 1px solid ${colors.backgroundColor2};
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: ${colors.backgroundColor2};
    color: #ffffff;
    /* Center # in circle */
    line-height: 39px;
  }

  .progressbar li:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    background: ${colors.borderColor};
    top: 20px; /*half of height Parent (li) */
    left: -25%;
  }

  .progressbar li:first-child:after {
    content: none;
  }

  .progressbar li.active:before {
    background: rgb(71, 30, 84);
    content: '✔';
    color: #ffffff;
  }

  .container_login_success .login_success img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container_login_success .login_success h2 {
    text-align: center;
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
  }

  .container_login_success .login_success p {
    font-family: 'Work Sans';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .container_login_success {
      width: 100%;
    }

    .container_login_success .login_success h2 {
      font-size: 38px;
    }

    .container_login_success .login_success p {
      font-size: 18px;
    }
  }

  //
  @media (max-width: 575.98px) {
  }
`;

const LoginSuccessPage = () => {
  return (
    <PrimaryLayout>
      <LoginSuccessStyled>
        <div className="container_login_success">
          <div className="login_success">
            <ul className="progressbar">
              <li className="active">Step 1</li>
              <li className="active">Step 2</li>
              <li className="active">Step 3</li>
            </ul>
            <img src={login_success} alt="" />
            <h2>Login Successsful</h2>
            <p>
              You have successfully signed into your account. You can close this
              window and continue using the product.
            </p>
            <a href="/">
              <Button
                content={'Back to home'}
                bgColor={'rgb(71, 30, 84)'}
                textColor={colors.whiteColor}
                borderRadius={'12px'}
                padding={'10px 20px'}
              ></Button>
            </a>
          </div>
        </div>
      </LoginSuccessStyled>
    </PrimaryLayout>
  );
};

export default LoginSuccessPage;
