import React from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';

import {ReactComponent as UserIcon} from '../../assets/header-imgs/User.svg';

const SignUpButton = ({width, height}) => {
  return (
    <SignUpBtnStyled width={width} height={height}>
      <a href="/connect-wallet">
        <div className="signUp-btn">
          <div className="signUp-Wrap">
            <div className="signUp-icon">
              <UserIcon></UserIcon>
            </div>
            <div className="signUp-text">Connect a wallet</div>
          </div>
        </div>
      </a>
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
    font-weight: 600;
    color: ${colors.whiteColor};
  }
`;

// SignUpButton.defaultProps = {
//   width: '152px',
//   height: '60px',
// };
