import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PrimaryLayout = ({children}) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export { PrimaryLayout };
