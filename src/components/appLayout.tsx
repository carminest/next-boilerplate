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
  border: 1px solid #ffffff;
  background-color: ${Color.White};
  max-width: 1920px;
  min-width: 1080px;
`;

export default AppLayout;
