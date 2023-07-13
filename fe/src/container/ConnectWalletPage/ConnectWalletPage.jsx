import styled from "styled-components";
import background from "../../assets/ConnectWalletPage/WalletBackground.svg";
import { Button } from "components/Button";
import mask from "../../assets/ConnectWalletPage/Metamask.svg";
import coin from "../../assets/ConnectWalletPage/Coinbase.svg";
import wallet from "../../assets/ConnectWalletPage/WalletConnect.svg";
const StyledConnectWalletPage = styled.div`
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */

  :root {
    /* --color-1: #c0dbea; */
    --color-2: #6096b4;
    --black-color: #000;
    /* --btn-color: #d885a3; */
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  .main {
    height: 100vh;
    position: relative;
    /* z-index: -1; */
    background: linear-gradient(
      179.4deg,
      rgb(12, 20, 69) -16.9%,
      rgb(71, 30, 84) 119.9%
    );
  }

  .wallet-container {
    max-width: 1920px;
  }

  .wallet-form-wrap {
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

  .wallet__left,
  .wallet__right {
    width: 50%;
  }

  /* Login Left */
  .wallet__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding: 20px;
  }

  .wallet-content {
    margin: 0 auto;
  }

  .wallet-title {
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

  /*  Login right */
  .wallet__right {
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

  .wallet-right-wrap .images {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translate(-50%, -50%);
    display: flex;
    width: 500px;
    height: 500px;
    z-index: 20;
  }

  .input-form {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .input-form button {
    width: 84%;
    justify-content: none;
  }
  .wallet-content p {
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    width: 408px;
    padding-top: 20px;
    padding-bottom: 40px;
  }

  /* Responsive */
  /* extra large */
  @media (max-width: 1200px) {
    .input-form button {
      width: 78%;
    }
    .wallet-form-wrap {
      width: 994px;
    }

    .wallet-title {
      margin-top: 30px;
      font-size: 52px;
      text-align: center;
    }

    .form-control {
      min-width: 416px;
    }

    /* right */
    .wallet-right-wrap .images {
      width: 400px;
      height: 500px;
    }

    .wallet-right-wrap .images {
      top: 58%;
    }
  }

  /* Large */
  @media (max-width: 992px) {
    .wallet-form-wrap {
      /* width: 854px; */
      width: 90%;
    }
    .main {
      padding: 20px;
    }

    .form-control {
      min-width: 370px;
    }

    /* right */
    .wallet-right-wrap .images {
      width: 324px;
      height: 486px;
    }
    .background {
      width: 90%;
      background-size: cover;
    }
    .input-form button {
      width: 78%;
    }
    .wallet-title {
      text-align: unset;
      font-size: 40px;
    }
    .wallet-content p {
      font-size: 19px;
    }
  }
  @media (max-width: 767.98px) {
    .wallet__right {
      display: none;
    }
    .wallet-title {
      /* justify-content: center; */
    }
    .wallet-content {
      width: 70%;
    }

    .wallet__left {
      width: 100%;
    }
    .form-control {
      min-width: 0;
    }
    .input-form {
      width: 100%;
    }
    .input-form button {
      width: 100%;
    }
    .background {
      background-size: cover;
      width: 79%;
    }
  }

  @media (max-width: 576px) {
    .wallet-form-wrap {
      width: 450px;
    }
    .main {
      padding: 20px;
      /* width: 80%; */
    }
    .wallet__left {
      width: 100%;
    }

    .wallet__right {
      display: none;
    }
    .wallet-title {
      font-size: 34px;
    }
  }
`;

export const ConnectWalletPage = () => {
  return (
    <StyledConnectWalletPage>
      <div className="main">
        <div className="wallet-container">
          <div className="wallet-form-wrap">
            <div className="wallet__left">
              <div className="wallet-content">
                <h2 className="wallet-title">Connect Wallet</h2>
                <p>
                  Choose a wallet you want to connect. There are several wallet
                  providers.
                </p>
                <form action="#" className="form-control">
                  <div className="input-form">
                    <Button
                      borderRadius="20px"
                      img={mask}
                      bgColor="#3B3B3B"
                      padding="36px 80px"
                      content="Metamask"
                      textColor="white"
                      fontSize="22px"
                      fontWeight="600"
                    ></Button>
                    <Button
                      borderRadius="20px"
                      img={wallet}
                      bgColor="#3B3B3B"
                      padding="36px 80px"
                      content="Wallet Connect"
                      textColor="white"
                      fontSize="22px"
                      fontWeight="600"
                    ></Button>
                    <Button
                      borderRadius="20px"
                      img={coin}
                      bgColor="#3B3B3B"
                      padding="36px 80px"
                      content="Coinbase"
                      textColor="white"
                      fontSize="22px"
                      fontWeight="600"
                    ></Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="wallet__right">
              <div className="wallet-right-wrap">
                <div className="background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledConnectWalletPage>
  );
};
