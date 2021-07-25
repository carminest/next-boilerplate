import React from 'react';
import Footer from './footer';
import Header from './header';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <AppLayoutContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AppLayoutContainer>
  );
};

const AppLayoutContainer = styled.div`
  position: relative;
`;

const Content = styled.div`
  min-height: 85vh;
  background-color: ${Color.White};
  max-width: 1920px;
  min-width: 1080px;
  display: block;
  width: 100%;
  margin: auto;
  padding: 0 30px;
`;

export default AppLayout;
