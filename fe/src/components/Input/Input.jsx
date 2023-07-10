import styled from 'styled-components';
import {useState} from 'react';

// const { default: styled } = require("styled-components");

const StyledInput = styled.div`
  input {
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
    border: ${(props) => (props.boderColor ? props.border : 'none')};
    border-radius: ${(props) => props.borderRadius};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    /* padding-left: 52px;
    padding-bottom: 12px;
    padding-top: 12px; */
    padding-left: ${(props) => props.paddingLeft};
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
    padding-right: ${(props) => props.paddingRight};
    display: flex;
    position: relative;
    /* align-items: center; */
  }
  /* label{
    display: flex;

  } */
  img {
    position: absolute;
    left: 14px;
    bottom: 52%;
    align-items: center;
  }
  div {
    position: absolute;
  }
`;
const Input = ({
  textColor,
  bgColor,
  border,
  borderRadius,
  fontSize,
  placeHolder,
  img,
  fontWeight,
  width,
  height,
  type,
  id,
  onChange,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  password,
  onClick,
}) => {
  // console.log('password:', password);
  const [passwordShown, setPasswordShown] = useState(false);
  // function togglePassword() {
  //   console.log('click');
  //   setPasswordShown(!passwordShown);
  //   const eyesClose = document.querySelector('.eyes-close');
  //   const eyesOpen = document.querySelector('.eyes-open');
  //   if (passwordShown === false) {
  //     eyesClose.classList.add('d-none');
  //     eyesOpen.classList.add('d-block');
  //   } else {
  //     eyesClose.classList.remove('d-none');
  //     eyesOpen.classList.remove('d-block');
  //   }
  // }
  return (
    <StyledInput
      textColor={textColor}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      img={img}
      fontWeight={fontWeight}
      width={width}
      height={height}
      type={passwordShown ? 'text' : 'password'}
      // type={type}
      onClick={onClick}
      id={id}
      onChange={onChange}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      password={password}
      // passwordShown={passwordShown}
    >
      <input
        type={type}
        placeholder={placeHolder}
        id={id}
        onChange={onChange}
      />

      {/* {password && (
        <>
          {passwordShown ? (
            <i
              className="fa-solid fa-eye-slash eyes-close"
              onClick={onClick}
            ></i>
          ) : (
            <i className="fa-solid fa-eye eyes-open" onClick={onClick}></i>
          )}
        </>
      )} */}
    </StyledInput>
  );
};

export {Input};
