import {colors} from 'Global';
import React from 'react';
import {useSettingsStore} from 'store/store';
import styled from 'styled-components';

const DarkMode = ({onChange}) => {
  const light = useSettingsStore((state) => state.light);
  return (
    <DarkModeStyled className="darkMode">
      <label className="switch">
        <input type="checkbox" checked={light} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </DarkModeStyled>
  );
};

export default DarkMode;

const DarkModeStyled = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    /* width: 3.5em; */
    /* height: 2em; */
    width: 2.5em;
    height: 1.5em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    /* --background: #28096b; */
    --background: ${colors.backgroundDarkMode};
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: 0.5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: '';
    /* height: 1.4em;
    width: 1.4em; */
    height: 1.1em;
    width: 1.1em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }

  input:checked + .slider {
    /* background-color: #522ba7; */
    background-color: ${colors.primaryColor};
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;

export {DarkMode};
