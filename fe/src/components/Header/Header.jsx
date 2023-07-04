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
            <div className="icon">
              <MarketIcon></MarketIcon>
            </div>
            <div className="header-logo">
              <Logo></Logo>
            </div>
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

const HeaderStyled = styled.div`
  width: 100%;
  .header {
    background-color: ${colors.background};
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
  .header-left {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 16px;
  }
  .header-logo {
    display: flex;
    align-items: center;
  }
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

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .header-wrapper {
      max-width: 834px;
    }
    .tablet-mobile-nav {
      display: block;
      cursor: pointer;
    }
    .header-right-nav {
      display: none;
    }
  }

  // Responsive
  @media (max-width: 575.98px) {
    .header-wrapper {
      max-width: 375px;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .header-wrapper {
      max-width: 436px;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
`;
