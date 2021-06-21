import React from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;
