import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-width: fit-content;
  border: ${(props) => (props.boderColor ? props.border : "none")};
  border-radius: 40px;
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  margin-right: ${(props) => (props.mr ? `${props.mr}` : "unset")};
`;

const ButtonLargeStyled = styled.div``

const ButtonSmallStyled = styled.div``

const Button = ({
  textColor,
  bgColor,
  border,
  percent,
  fontSize,
  content,
  img,
  borderRadius,
  type,
}) => {
  if (type === "large") {
    return (
      <ButtonLargeStyled></ButtonLargeStyled>
    )
  } else if (type === "small") {
    return (
      <ButtonSmallStyled></ButtonSmallStyled>
    )
  } else {
    return (
      <ButtonStyled
        percent={percent}
        textColor={textColor}
        bgColor={bgColor}
        border={border}
        fontSize={fontSize}
        img={img}
        borderRadius={borderRadius}
        type={type}
      >
        <img src={img} alt="" />
        <span>{content}</span>
      </ButtonStyled>
    );
  }
};

export default Button;
