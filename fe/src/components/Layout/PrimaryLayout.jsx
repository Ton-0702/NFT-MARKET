import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useSettingsStore} from 'store/store';

const PrimaryLayout = ({children}) => {
  const light = useSettingsStore((state) => state.light);
  return (
    <div>
      <Header></Header>
      {children}
      <Footer light={light}></Footer>
    </div>
  );
};

export {PrimaryLayout};
