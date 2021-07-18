import React from 'react';
import { Global, css } from '@emotion/core';
import Color from '@commons/style/themes/colors';

const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
        #__next {
          background-color: ${Color.White};
        }
        * {
          margin: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          outline: none;
          color: ${Color.Grayscale900};
          font-family: 'Noto Sans KR';
        }
        *::before,
        *::after {
          box-sizing: border-box;
        }
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        button,
        a {
          padding: 0;
          text-decoration: none;
          cursor: pointer;
          color: inherit;
          border: 0;
          background: none;
        }
        input {
          border: 0;
          background: none;
        }
        ul,
        ol,
        dd {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        input[type='radio'] {
          display: none;
        }
        input[type='radio'] + label {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
          background-color: ${Color.White};
          cursor: pointer;
          border: solid 1px ${Color.Grayscale400};
        }
        input[type='radio']:checked + label {
          background: radial-gradient(
            ellipse at center,
            ${Color.Primary500} 0,
            ${Color.Primary500} 40%,
            #fff 40%
          );
        }
        input::-moz-focus-inner {
          border: 0;
          padding: 0;
          margin: 0;
        }
        p {
          margin: 0;
        }
        pre {
          white-space: pre-line;
          word-break: break-all;
        }
        figure {
          margin: 0;
        }
        cite {
          font-style: normal;
        }
        fieldset {
          border-width: 0;
          padding: 0;
          margin: 0;
        }

        //carousel custom dots styles..
        .test-css {
          bottom: -25px;
          width: 100%;
          text-align: center;
          margin-bottom: 45px;
          list-style: none;
          position: absolute;
          right: 15px;
          padding: 0;
        }

        .test-css li {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          padding: 0;
          cursor: pointer;
          margin-right: 25px;
        }

        .test-css li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 20px;
          height: 20px;
          padding: 5px;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: 0;
          background: 0 0;
        }

        .test-css li button:before {
          font-size: 2.7rem;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '―';
          text-align: center;
          opacity: 0.5;
          color: #ffffff;
        }

        .test-css li.slick-active button:before {
          opacity: 0.75;
          color: #ffffff;
        }
      `}
    />
  );
};

export default GlobalStyles;
