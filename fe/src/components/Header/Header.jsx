import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {SignUpButton} from '../Button/SignUpButton';
// import {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {ReactComponent as MarketIcon} from '../../assets/header-imgs/market.svg';
import {ReactComponent as Logo} from '../../assets/header-imgs/logo.svg';
import {ReactComponent as MenuBar} from '../../assets/header-imgs/menu-tablet.svg';
import {ReactComponent as Close} from '../../assets/header-imgs/times.svg';
import {useNavigate} from 'react-router-dom';

import {useCurrentUserStore, useSettingsStore} from 'store/store';
import DarkMode from 'components/DarkMode/DarkMode';

const Header = () => {
  const [tokenUser, setToken] = useState(null);
  const [showSubHeader, setShowSubHeader] = useState(false);
  const token = Cookies.get('token');
  // console.log('hello token: ', token);
  const addCurrentUser = useCurrentUserStore((state) => state.addCurrentUser);

  // console.log('currentUser: ', currentUser);
  const toggleClick = () => {
    setShowSubHeader(!showSubHeader);
  };

  // console.log('tokenUser:', tokenUser);

  const handleLogoutForm = (e) => {
    console.log('token logout: ', token);
    // e.preventDefault();
    axios
      .post(`http://localhost:8080/api/logout/${token}`)
      .then(function (response) {
        console.log('phan hoi thanh cong logout: ', response.data.data);
        // const cookies = new Cookies();
        // cookies.set("token logout", response.data.data);
        // localStorage.removeItem('metamask-address');
        // Cookies.remove('token');
        // navigate('/');
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    localStorage.removeItem('metamask-address');
    Cookies.remove('token');
    navigate('/');
  };

  useEffect(() => {
    function getUser() {
      try {
        function getTokenByUser() {
          return axios.get(
            'http://localhost:8080/api/session-address-wallet/' + token
          );
        }
        Promise.all([getTokenByUser()]).then((res) => {
          // console.log("what is res: ",res);
          const tokenUserData = res[0].data;
          const dataUser = res[0].data[0];
          console.log('tokenUserData: ', tokenUserData);
          setToken(tokenUserData);
          addCurrentUser(dataUser);
        });
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  let address_wallet = '';
  if (tokenUser === '' || tokenUser === null) {
    address_wallet = '';
  } else {
    address_wallet =
      tokenUser[0].address_wallet.substring(0, 3) +
      '...' +
      tokenUser[0].address_wallet.substring(
        tokenUser[0].address_wallet.length - 3
      );
  }

  const {toggleDarkMode} = useSettingsStore();
  const light = useSettingsStore((state) => state.light);

  useEffect(() => {
    if (light) {
      document.querySelector('body').style.backgroundColor =
        'rgb(242 242 242 / 60%)';
      const navItemLink = document.querySelectorAll('.nav-item-link');
      navItemLink[0].style.color = '#A259FF';
      navItemLink[1].style.color = '#A259FF';
      document.querySelector('.header').classList.add('light');
      document.querySelector('#footer').classList.add('light');
    } else {
      document.querySelector('body').style.backgroundColor = '#2B2B2B';
      const navItemLink = document.querySelectorAll('.nav-item-link');
      navItemLink[0].style.color = '#fff';
      navItemLink[1].style.color = '#fff';
      document.querySelector('.header').classList.remove('light');
      document.querySelector('#footer').classList.remove('light');
    }
  }, [light]);
  const handleClickBarIcon = () => {
    const overlay = document.querySelector('.overplay');
    const barIcon = document.querySelector('.nav-mobile');
    barIcon.style.transform = 'translateX(0)';

    overlay.style.display = 'block';
  };
  const handleClickCloseBtn = () => {
    const overlay = document.querySelector('.overplay');
    const barIcon = document.querySelector('.nav-mobile');
    overlay.style.display = 'none';
    barIcon.style.transform = 'translateX(100%)';
  };

  const navigate = useNavigate();

  // Logout Metamask

  return (
    <HeaderStyled>
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <div onClick={() => navigate('/')}>
              <LogoItem light={light}></LogoItem>
            </div>
          </div>
          {/* Overlay */}
          <div className="overplay" onClick={handleClickCloseBtn}></div>
          <div className="header-right">
            <nav className="header-right-nav">
              <div className="nav-item">
                <a href="/market-place" className="nav-item-link">
                  <span>Marketplace</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="/ranking" className="nav-item-link">
                  <span>Rankings</span>
                </a>
              </div>

              <div className="nav-item">
                <DarkMode onChange={toggleDarkMode}></DarkMode>
              </div>
              <div className="header-connect-btn">
                <SignUpButton
                  className="signUp-btn"
                  onClick={() => {
                    console.log('clicked');
                    toggleClick();
                  }}
                  width={'200px'}
                >
                  {address_wallet}
                </SignUpButton>

                {showSubHeader && token && (
                  <div className="sub-header">
                    <ul className="sub-header-list">
                      <li className="sub-header-items">
                        <a href="/create-nft" className="sub-header-item-link">
                          <span>Create NFT</span>
                        </a>
                      </li>

                      <li className="sub-header-items">
                        <a
                          href="/"
                          onClick={handleLogoutForm}
                          className="sub-header-item-link"
                        >
                          <span>Log out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
            {/* nav Tablet */}
            <nav className="tablet-mobile-nav">
              <MenuBarIconStyled
                light={light}
                className="tablet-mobile-icon"
                onClick={handleClickBarIcon}
              >
                <MenuBar></MenuBar>
              </MenuBarIconStyled>

              <NavMobileStyled className="nav-mobile" light={light}>
                <div className="close-btn" onClick={handleClickCloseBtn}>
                  <Close></Close>
                </div>

                <div className="nav-mobile-item">
                  <a href="/create-nft" className="nav-mobile-item-link">
                    <span>Create NFT</span>
                  </a>
                </div>
                <div className="nav-mobile-item">
                  <a href="/market-place" className="nav-mobile-item-link">
                    <span>Marketplace</span>
                  </a>
                </div>
                <div className="nav-mobile-item">
                  <a href="/ranking" className="nav-mobile-item-link">
                    <span>Rankings</span>
                  </a>
                </div>

                <div className="nav-mobile-item" onClick={handleLogoutForm}>
                  <a href="/" className="nav-mobile-item-link">
                    <span>Log Out</span>
                  </a>
                </div>

                <div className="switch-darkMode">
                  <DarkMode onChange={toggleDarkMode}></DarkMode>
                </div>
              </NavMobileStyled>
            </nav>
          </div>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;

// logo
export const LogoItem = ({light}) => {
  return (
    <LogoItemStyled className="logo" light={light}>
      <div className="logo-icon">
        <MarketIcon></MarketIcon>
      </div>
      <div className="header-logo-text">
        <Logo></Logo>
      </div>
    </LogoItemStyled>
  );
};

// LogoItem Style
const LogoItemStyled = styled.div`
  display: flex;

  align-items: center;
  .logo-icon {
    margin-right: 16px;
  }
  .header-logo-text {
    display: flex;
    align-items: center;
  }
  .header-logo-text svg path {
    fill: ${(prop) => (prop.light ? colors.primaryColor : colors.whiteColor)};
  }
  cursor: pointer;
`;
// MenuBarIconStyled
const MenuBarIconStyled = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    cursor: pointer;
  }

  svg path {
    fill: ${(prop) => (prop.light ? colors.blackColor : colors.whiteColor)};
  }
`;

// Nav-Mobile styled
const NavMobileStyled = styled.div`
  background-color: ${(prop) =>
    prop.light ? colors.whiteColor : colors.backgroundColor2};

  .nav-mobile-item .nav-mobile-item-link {
    color: ${(prop) =>
      prop.light ? colors.backgroundColor2 : colors.whiteColor};
  }
`;

// Header Style
const HeaderStyled = styled.div`
  .header {
    background-color: ${colors.backgroundColor2};
    align-items: center;
  }
  .header-wrapper {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1182px;
    height: 100px;
  }
  // header left

  // header right
  .header-right-nav {
    display: flex;
    align-items: center;
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 46px;
    padding: 0 20px;
  }
  .nav-item a {
    display: inline-block;
    font-weight: 600;
    color: ${colors.whiteColor};
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
  }

  // sub-header
  .header-connect-btn {
    position: relative;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .sub-header {
    position: absolute;
    top: 80px;
    right: 0px;
    background-color: ${colors.backgroundColor2};
    width: 200px;
    height: 150px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all 0.3s linear;
    opacity: 1;
    animation: fadeIn 0.4s ease-in-out;
  }
  .sub-header .sub-header-item-link {
    width: 100%;
    display: inline-block;
    color: ${colors.whiteColor};
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
  .sub-header-items {
    padding: 10px 0;
    margin: 4px 0;
  }
  .sub-header-items:hover .sub-header-item-link {
    color: ${colors.primaryColor};
  }

  /* overlay */
  .overplay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: none;
  }
  // nav-mobile

  .tablet-mobile-nav {
    position: relative;
    display: none;
  }

  .close-btn {
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 10;
  }
  .close-btn svg {
    width: 100%;
    height: 100%;
  }
  .close-btn svg path {
    fill: ${colors.primaryColor};
    opacity: 0.8;
  }
  .close-btn:hover svg path {
    opacity: 1;
  }

  .nav-mobile {
    position: absolute;
    padding-top: 30px;
    top: -38px;
    right: -120px;
    /* background-color: ${colors.backgroundColor2}; */
    width: 250px;
    height: 100vh;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: translateX(100%);
    transition: all 0.3s linear;
    opacity: 1;
    animation: fadeIn 0.4s ease-in-out;
  }

  .switch-darkMode {
    margin-top: 10px;
  }
  .switch-darkMode .darkMode {
    text-align: center;
  }

  .nav-mobile-item .nav-mobile-item-link {
    display: inline-block;
    text-align: center;
    width: 100%;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    /* color: ${colors.whiteColor}; */
    padding: 10px 0;
  }
  .nav-mobile-item .nav-mobile-item-link:hover {
    color: ${colors.primaryColor};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // Responsive

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .header-wrapper {
      max-width: 736px;
    }
    .tablet-mobile-nav {
      display: block;
    }
    .header-right-nav {
      display: none;
    }
  }

  @media (max-width: 840px) {
    .nav-mobile {
      right: -60px;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .header-wrapper {
      padding: 0 20px;
    }
  }

  //
  @media (max-width: 575.98px) {
    .header-wrapper {
      padding: 0 10px;
    }
  }
`;
