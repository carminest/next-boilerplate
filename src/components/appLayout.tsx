import React from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Body />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
