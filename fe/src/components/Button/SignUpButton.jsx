import React from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {useEffect, useState} from 'react';
import {ReactComponent as UserIcon} from '../../assets/header-imgs/User.svg';
// import axios from 'axios';

const SignUpButton = ({width, height, children, ...rest}) => {
  // const [addressWallet, setAddressWallet] = useState();
  // useEffect(() => {
  //   function getUser() {
  //     try {
  //       function getAddressWallet(){
  //         return axios.get('http://localhost:8080/api/session-address-wallet');
  //       }
  //       Promise.all([
  //         getAddressWallet(),
  //       ]).then((res) => {
  //         console.log("dafadf: ",res);
  //         const address_wallet = res[0].data;
  //         console.log("check user1: ",addressWallet);
  //         setAddressWallet(address_wallet)
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUser();
  // }, [])

  // console.log("check user: ",addressWallet);
  return (
    <SignUpBtnStyled width={width} height={height} {...rest}>
      {children !== '' ? (
        <a onClick={localStorage.removeItem('metamask-address')}>
          <div className="signUp-btn">
            <div className="signUp-Wrap">
              <div className="signUp-icon">
                <UserIcon></UserIcon>
              </div>
              <div className="signUp-text">{children}</div>
            </div>
          </div>
        </a>
      ) : (
        <a href="/connect-wallet">
          <div className="signUp-btn">
            <div className="signUp-Wrap">
              <div className="signUp-icon">
                <UserIcon></UserIcon>
              </div>
              <div className="signUp-text">
                <span>Connnect a wallet</span>
              </div>
            </div>
          </div>
        </a>
      )}
    </SignUpBtnStyled>
  );
};

export {SignUpButton};

const SignUpBtnStyled = styled.div`
  a {
    text-decoration: none;
  }
  .signUp-btn {
    width: ${(props) => {
      //   console.log(props.width);
      return props.width ? props.width : 152 + 'px';
    }};
    height: ${(props) => (props.height ? props.height : 60 + 'px')};
    background-color: ${colors.primaryColor};
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
  }
  .signUp-Wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .signUp-icon {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }
  .signUp-icon svg {
    width: 100%;
    height: 100%;
  }
  .signUp-text {
    span {
      font-weight: 600;
      color: ${colors.whiteColor};
    }
    font-weight: 600;
    color: ${colors.whiteColor};
  }
`;

// SignUpButton.defaultProps = {
//   width: '152px',
//   height: '60px',
// };
