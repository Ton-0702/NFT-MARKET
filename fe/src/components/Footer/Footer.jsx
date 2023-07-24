import React from 'react';
import styled from 'styled-components';
import {LogoItem} from '../Header';
import {colors} from '../../Global';
import {InputFooter} from '../Input/InputFooter';

import {ReactComponent as DiscordIcon} from '../../assets/footer-imgs/Discord-icon.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/footer-imgs/Youtube-icon.svg';
import {ReactComponent as TwitterIcon} from '../../assets/footer-imgs/Twitter-icon.svg';
import {ReactComponent as InstagramIcon} from '../../assets/footer-imgs/Instagram-icon.svg';
// import {ReactComponent as EmailIcon} from '../../assets/footer-imgs/email-icon.svg';

const Footer = ({light}) => {
  return (
    <FooterStyled id="footer" light={light}>
      <footer className="footer">
        {/* <LogoItem></LogoItem> */}
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-market-place">
              <div className="market-place-title">
                <LogoItem light={light}></LogoItem>
              </div>
              <div className="market-place-text">
                NFT marketplace UI created with Anima for Figma.
              </div>
              <div className="market-place-join">Join our community</div>
              <div className="market-place-icon-social">
                <DiscordIcon></DiscordIcon>
                <YoutubeIcon></YoutubeIcon>
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
              </div>
            </div>
            <div className="footer-explore">
              <div className="explore-title">Explore</div>
              <ul className="explore-list">
                <li className="explore-item">Marketplace</li>
                <li className="explore-item">Rankings</li>
                <li className="explore-item">Connect a wallet</li>
              </ul>
            </div>
            <div className="footer-join">
              <div className="join-title">Join our weekly digest</div>
              <div className="join-text">
                Get exclusive promotions & updates straight to your inbox.
              </div>
              <InputFooter
                light={light}
                placeholder="Enter Your Email Address"
                type="email"
              ></InputFooter>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-border"></div>
            <div className="copyright">
              Ⓒ NFT Market. Use this template freely.
            </div>
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  border-top: 2px solid #2b2b2b;
  padding: 40px 0;
  background-color: ${colors.backgroundColor2};

  .footer-wrap {
    max-width: 1050px;
    margin: 0 auto;
    /* height: 191px; */
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }
  // market-place
  .footer-market-place {
    width: 30%;
    display: flex;
    flex-direction: column;
    /* color: ${colors.textColor1}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.textColor1)};
  }
  .market-place-title {
    margin-bottom: 28px;
  }
  .market-place-text {
    font-weight: 400;
    max-width: 238px;
    line-height: 22.4px;
    margin-bottom: 18px;
  }
  .market-place-join {
    margin-bottom: 12px;
  }
  .market-place-icon-social {
    width: 158px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .market-place-icon-social svg {
    cursor: pointer;
  }
  /* footer-explore */
  .footer-explore {
    width: 20%;
    display: flex;
    flex-direction: column;
    /* color: ${colors.textColor1}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.textColor1)};
    cursor: default;
  }
  .explore-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 35.2px;
    /* margin-bottom: 28px; */
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.primaryColor : colors.textColor1)};
  }
  .explore-list {
    max-width: 133px;
    list-style: none;
    padding: 0;
  }
  .explore-item {
    font-size: 16px;
    padding: 10px 0;
    cursor: pointer;
  }

  /* footer-join */
  .footer-join {
    width: 40%;
    display: flex;
    flex-direction: column;
    /* color: ${colors.textColor1}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.textColor1)};
  }
  .join-title {
    font-size: 22px;
    font-weight: 700;
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.primaryColor : colors.textColor1)};

    line-height: 35.2px;
    margin-bottom: 22px;
    cursor: default;
  }
  .join-text {
    font-size: 16px;
    width: 330px;
    line-height: 22.4px;
    margin-bottom: 18px;
  }
  /* footer-bottom */
  /* footer-border */
  .footer-border {
    border: 1px solid ${colors.borderColor};
  }
  .copyright {
    margin-top: 20px;
    /* color: ${colors.textColor1}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.textColor1)};

    font-weight: 400;
    font-size: 12px;
    line-height: 13.2px;
  }

  // Responsive

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .footer-wrap {
      max-width: 690px;
    }
    .footer-top {
      flex-direction: column;
      row-gap: 38px;
      margin-bottom: 48px;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .footer-wrap {
      max-width: 512px;
    }
  }

  @media (max-width: 575.98px) {
    .footer-wrap {
      max-width: 315px;
    }
    .footer-top {
      margin-bottom: 28px;
    }
    .footer-market-place,
    .footer-explore,
    .footer-join {
      width: 100%;
    }
    .market-place-text {
      max-width: 315px;
    }

    .explore-title {
      margin-bottom: 10px;
    }
    .explore-list {
      margin: 0;
    }

    // Subscribe btn
    .input-wrapper {
      /* width: 315px; */
      width: 315px;
      row-gap: 16px;
      flex-direction: column;
      height: 108px;
    }
    .input-footer {
      display: inline-block;
      width: 100%;
      padding: 0;
      height: 46px;
      text-indent: 14px;
    }
    .subscribe-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 46px;
      position: unset;
    }

    .button-icon {
      display: block;
      width: 20px;
      height: 20px;
    }
    .button-icon svg {
      width: 100%;
    }
  }
`;
