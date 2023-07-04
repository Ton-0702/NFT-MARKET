import styled from "styled-components";

const ButtonStyled = styled.div`
  button {
    display: flex;
    height: 60px;
    padding: 0px 50px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: ${(props) => (props.boderColor ? props.border : "none")};
    border-radius: ${(props) => props.borderRadius};
    background: ${(props) => props.bgColor};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
    line-height: 21px;
    color: ${(props) => props.textColor};
    font-size: ${(props) => props.fontSize};
    margin-right: ${(props) => (props.mr ? `${props.mr}` : "unset")};
  }
`;
 
const ButtonLargeStyled = styled.div``;

const ButtonSmallStyled = styled.div``;

const Button = ({
  textColor,
  bgColor,
  border,
  percent,
  fontSize,
  content,
  img,
  borderRadius,
  fontWeight,
  type,
}) => {
  if (type === "large") {
    return <ButtonLargeStyled></ButtonLargeStyled>;
  } else if (type === "small") {
    return <ButtonSmallStyled></ButtonSmallStyled>;
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
        fontWeight ={fontWeight}
      >
        <button>
          <img src={img} alt="" />
          <span>{content}</span>
        </button>
      </ButtonStyled>
    );
  }
};

export default Button;
