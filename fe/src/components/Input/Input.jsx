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
    padding-left: 52px;
    display: flex;
    position: absolute;
  }
  /* label{
    display: flex;

  } */
  img {
    position: relative;
    left: 20px;
    top: 12px;
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
    >
      <label>
        <input type={type} placeholder={placeHolder} id={id} />
        <img src={img} alt="" />
      </label>
    </StyledInput>
  );
};
export default Input;
