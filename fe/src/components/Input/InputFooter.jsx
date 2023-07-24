import styled from 'styled-components';
import {colors} from '../../Global';
import {ReactComponent as EmailIcon} from '../../assets/footer-imgs/email-icon.svg';

export const InputFooter = ({type, placeholder, text, light}) => {
  return (
    <InputFooterStyled light={light}>
      <div className="input-wrapper">
        <input
          className="input input-footer"
          id="input"
          name="input"
          required=""
          placeholder={placeholder}
          type={type}
        />
        <button className="subscribe-btn" type="button">
          <span className="button-icon">
            <EmailIcon></EmailIcon>
          </span>
          <span className="button-text">{text ? text : 'Subscribe'}</span>
        </button>
      </div>
    </InputFooterStyled>
  );
};

const InputFooterStyled = styled.div`
  .input-wrapper {
    position: relative;
    display: flex;
    width: 420px;
    height: 60px;
    border-radius: 20px;
  }
  .input-footer {
    width: 100%;
    border-radius: 20px;
    border: none;
    /* background-color: ${colors.whiteColor}; */
    background-color: ${(prop) =>
      prop.light ? colors.borderColor : colors.whiteColor};

    font-weight: 400;
    outline: none;
    border-radius: 20px;
    padding-left: 20px;
  }
  .input-footer::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.background};
  }
  .subscribe-btn {
    position: absolute;
    width: 179px;
    height: 60px;
    right: -1px;
    border-radius: 20px;
    background-color: ${colors.primaryColor};
    color: ${colors.whiteColor};
    border: none;
    transition: 0.6s ease;
    cursor: pointer;
  }

  .button-icon {
    display: none;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  .button-icon svg {
    width: 100%;
  }
  .button-text {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    margin: 2px 0 0 0;
  }
`;
