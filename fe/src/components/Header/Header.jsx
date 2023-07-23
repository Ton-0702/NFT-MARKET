import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {SignUpButton} from '../Button/SignUpButton';

import {ReactComponent as MarketIcon} from '../../assets/header-imgs/market.svg';
import {ReactComponent as Logo} from '../../assets/header-imgs/logo.svg';
import {ReactComponent as MenuBar} from '../../assets/header-imgs/menu-tablet.svg';
import {ReactComponent as Close} from '../../assets/header-imgs/times.svg';
import {useNavigate} from 'react-router-dom';
// import Switch from 'react-switch';
import {useSettingsStore} from 'store/store';

const Header = () => {
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
                <a href="market-place" className="nav-item-link">
                  <span>Marketplace</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="ranking" className="nav-item-link">
                  <span>Rankings</span>
                </a>
              </div>
              <SignUpButton width={'200px'}></SignUpButton>
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
              <div className="nav-mobile">
                <div className="close-btn" onClick={handleClickCloseBtn}>
                  <Close></Close>
                </div>
                <div className="nav-mobile-item">
                  <a href="/user-page" className="nav-mobile-item-link">
                    <span>username</span>
                  </a>
                </div>
                <div className="nav-mobile-item">
                  <a href="market-place" className="nav-mobile-item-link">
                    <span>Marketplace</span>
                  </a>
                </div>
                <div className="nav-mobile-item">
                  <a href="ranking" className="nav-mobile-item-link">
                    <span>Rankings</span>
                  </a>
                </div>
                <div className="nav-mobile-item">
                  <a href="/logout" className="nav-mobile-item-link">
                    <span>Log Out</span>
                  </a>
                </div>
                <div className="switch">
                  <button onClick={toggleDarkMode}>ToggleDarkMode</button>
                  {/* <Switch
                    onChange={() => {
                      console.log('checked');
                      setToggle(!toggle);
                    }}
                    checked={toggle}
                  ></Switch> */}
                </div>
              </div>
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
    /* visibility: hidden; */
    position: absolute;
    padding-top: 30px;
    top: -38px;
    right: -120px;
    background-color: ${colors.backgroundColor2};
    width: 250px;
    height: 100vh;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: translateX(100%);
    transition: all 0.3s linear;
    opacity: 1;
    animation: fadeIn 0.4s ease-in-out;
  }

  /* .tablet-mobile-nav .tablet-mobile-icon {
    width: 24px;
    height: 24px;
  }
  .tablet-mobile-nav .tablet-mobile-icon svg {
    width: 100%;
    cursor: pointer;
  } */

  .nav-mobile-item a {
    display: inline-block;
    text-align: center;
    width: 100%;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.whiteColor};
    padding: 10px 0;
  }
  .nav-mobile-item a:hover {
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
