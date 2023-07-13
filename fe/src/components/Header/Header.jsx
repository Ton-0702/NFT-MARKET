import React from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {SignUpButton} from '../Button/SignUpButton';

import {ReactComponent as MarketIcon} from '../../assets/header-imgs/market.svg';
import {ReactComponent as Logo} from '../../assets/header-imgs/logo.svg';
import {ReactComponent as MenuBar} from '../../assets/header-imgs/menu-tablet.svg';

const Header = () => {
  return (
    <HeaderStyled>
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            {/* <div className="icon">
              <MarketIcon></MarketIcon>
            </div>
            <div className="header-logo">
              <Logo></Logo>
            </div> */}
            <LogoItem></LogoItem>
          </div>
          <div className="header-right">
            <nav className="header-right-nav">
              <div className="nav-item">
                <a href="market" className="nav-item-link">
                  <span>Marketplace</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="ranking" className="nav-item-link">
                  <span>Rankings</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="wallet" className="nav-item-link">
                  <span>Connect a wallet</span>
                </a>
              </div>
              <SignUpButton></SignUpButton>
            </nav>
            {/* nav Tablet */}
            <nav className="tablet-mobile-nav">
              <div className="tablet-mobile-icon">
                <MenuBar></MenuBar>
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
export const LogoItem = () => {
  return (
    <LogoItemStyled className="logo">
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

  // nav-mobile
  .tablet-mobile-nav {
    display: none;
  }

  .tablet-mobile-nav .tablet-mobile-icon {
    width: 24px;
    height: 24px;
  }
  .tablet-mobile-nav .tablet-mobile-icon svg {
    width: 100%;
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
      cursor: pointer;
    }
    .header-right-nav {
      display: none;
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
      max-width: 315px;
      padding: 0;
    }
  }
`;
