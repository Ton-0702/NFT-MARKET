import styled from "styled-components";
// const { default: styled } = require("styled-components");

const StyledInput = styled.div`
  input {
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
    border: ${(props) => (props.boderColor ? props.border : "none")};
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
}) => {
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
      type={type}
      id={id}
      onChange={onChange}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    >
        <input
          type={type}
          placeholder={placeHolder}
          id={id}
          onChange={onChange}
        />
        <img src={img} alt="" />
    </StyledInput>
  );
};
export  {Input};
