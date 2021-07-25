import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'emotion-theming';
import wrapper from '../store';
import defaultTheme from '../commons/style/themes/defaults';
import GlobalStyles from '../commons/style/global';
import AppLayout from '../components/appLayout';
import dynamic from 'next/dynamic';

import { useMediaQuery } from 'react-responsive';

/** External Plugin Css Inject */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'normalize.css';

import 'core-js/modules/es.array.unscopables.flat';
import 'core-js/modules/es.array.unscopables.flat-map';
import 'core-js/modules/es.object.from-entries';
import 'core-js/modules/web.immediate';
import { DynamicPageProps } from '@src/commons/constants/type';
import { MOBILE_MAX_WIDTH, PC_MAX_WIDTH } from '@src/commons/const';

// const SimpleSlider = dynamic(() => import('@src/sampleComponent'), {
//   ssr: false,
// });

function App({ Component, pageProps }: AppProps) {
  let mediaQuery = '';
  if (process.browser) {
    const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });
    // const isTablet = useMediaQuery({ maxWidth: TABLET_MAX_WIDTH });
    const isPC = useMediaQuery({ maxWidth: PC_MAX_WIDTH });
    if (isMobile) {
      mediaQuery = '';
    } else if (isPC) {
      mediaQuery = '';
    }
  }

  const props = {
    ...pageProps,
    mediaQuery,
  };

  const customProps = pageProps as DynamicPageProps;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <title>비버블록</title>
        <meta name="description" content="비버블록" />
        <meta name="keywords" content="비버블록" />
        <meta
          property="og:image"
          content={
            process.browser && customProps.imageUrl
              ? window.location.origin + customProps.imageUrl
              : '/logo.svg'
          }
        />
        <meta property="og:title" content={customProps.title || '비버블록'} />
        <meta
          property="og:description"
          content={customProps.description || '비버블록 테스트 페이지'}
        />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppLayout>
          <Component {...props} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
