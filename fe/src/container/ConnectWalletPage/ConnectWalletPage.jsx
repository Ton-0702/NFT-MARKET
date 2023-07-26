import styled from "styled-components";
import { useState, useEffect } from "react";
import { EthereumInstance } from "sdk/metamask.js";
import background from "../../assets/ConnectWalletPage/WalletBackground.svg";
import { Button } from "components/Button";
import mask from "../../assets/ConnectWalletPage/Metamask.svg";
import coin from "../../assets/ConnectWalletPage/Coinbase.svg";
import wallet from "../../assets/ConnectWalletPage/WalletConnect.svg";
import axios from "axios";
import { colors } from "Global";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const StyledConnectWalletPage = styled.div`
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
    width: 100%;
    background: linear-gradient(
      179.4deg,
      rgb(12, 20, 69) -16.9%,
      rgb(71, 30, 84) 119.9%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wallet-container {
    width: 1050px;
    top: 50%;
    left: 50%;
    padding: 30px;
  }

  .wallet-form-wrap {
    display: flex;
    border-radius: 2rem;
    box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.1);
    /* padding-bottom: 40px; */
    /* margin: auto; */
    background-color: #fff;
  }

  /* Login Left */
  .wallet__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding: 20px;
    width: 45%;
  }

  .progressbar {
    counter-reset: step;
    width: 100%;
  }

  .progressbar li {
    position: relative;
    list-style: none;
    float: left;
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
    content: "";
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
    content: "✔";
    color: #ffffff;
  }

  .wallet-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .wallet-title {
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
  }

  .form-control .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-bottom: 20px; */
  }

  /*  Login right */
  .wallet__right {
    display: flex;
    justify-content: flex-end;
    width: 55%;
  }

  .wallet__right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }

  .input-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .input-form button {
    width: 100%;
    justify-content: none;
  }
  .wallet-content p {
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }

  /* Responsive */
  /* extra large */
  @media (max-width: 1200px) {
    .wallet-container {
      width: auto;
    }

    .wallet-title {
      font-size: 52px;
      text-align: center;
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
    .wallet__left {
      width: 100%;
    }

    .wallet__right {
      display: none;
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

    .wallet-title {
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

    .wallet__left {
      width: 100%;
    }
    .form-control {
      min-width: 0;
    }

    .background {
      background-size: cover;
      width: 79%;
    }
  }

  @media (max-width: 576px) {
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

    .input-form button {
      padding: 10px 20px;
    }
  }
`;

export const ConnectWalletPage = () => {
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [metamaskAddress, setMetamaskAddress] = useState(
    localStorage.getItem("metamask-address")
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("metamask-address")) {
      EthereumInstance.getEthereumAccounts();
    }
  }, []);
  const connectMetamask = async (setMetamaskAddress) => {
    // if ()
    if (localStorage.getItem("metamask-address")) {
      EthereumInstance.getEthereumAccounts();
      const account = localStorage.getItem("metamask-address");
      console.log("accountMEtaMask: ", account);

      axios
        .post(`http://localhost:8080/api/connect-wallet/${account}`)
        .then(function (response) {
          console.log("phan hoi thanh cong login: ", response);
          const cookies = new Cookies();
          cookies.set("token", response.data.data);
          // navigate("/login-success");
          navigate("/", {
            state: {
              address_wallet: account,
            },
          });
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      const account = await EthereumInstance.connectMetaMaskWallet();
      console.log("account: ", account);
      setMetamaskAddress(account);

      if (account != null) {
        setTimeout(() => {
          navigate("/profile-details", {
            state: {
              address_wallet: account[0],
            },
          });
        }, 2000);
      }
      // <Navigate to="/profile-details" />
    }
  };
  return (
    <StyledConnectWalletPage>
      <div className="main">
        <div className="wallet-container">
          <div className="wallet-form-wrap">
            <div className="wallet__left">
              <div className="wallet-content">
                {address ||
                  (metamaskAddress && (
                    <ul className="progressbar">
                      <li className="active">Step 1</li>
                      <li>Step 2</li>
                      <li>Step 3</li>
                    </ul>
                  ))}
                <h2 className="wallet-title">Connect Wallet</h2>
                <p>
                  Choose a wallet you want to connect. There are several wallet
                  providers.
                </p>
                <div className="input-form">
                  <Button
                    borderRadius="20px"
                    img={mask}
                    bgColor="#3B3B3B"
                    padding="30px 80px"
                    content="Metamask"
                    textColor="white"
                    fontSize="22px"
                    fontWeight="600"
                    onClick={() => connectMetamask(setMetamaskAddress)}
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
              </div>
            </div>
            <div className="wallet__right">
              <img
                src="https://drive.google.com/uc?export=view&id=1N3obHIHu9uCzTzyYp_-kUFCbwLciJbap"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </StyledConnectWalletPage>
  );
};
