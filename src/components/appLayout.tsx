import { Router, useRouter } from 'next/router';
import React from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';
import styled from '@src/commons/style/themes/styled';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const router = useRouter();

  let indexProp;
  if (router.asPath === '/') {
    indexProp = 'index';
  }

  return (
    <>
      <Header />
      <Body indexProp={indexProp} />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 82vh;
  position: static;
  border: 2px solid greenyellow;
  padding-top: 96px;
  width: 100%;
  padding-left: 22vw;
  padding-right: 22vw;
`;

export default AppLayout;
