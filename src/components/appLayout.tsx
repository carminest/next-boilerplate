import { Router, useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  min-height: 82vh;
  border: 2px solid greenyellow;
  background-color: ${Color.White};
`;

export default AppLayout;
