import React from 'react';
import { Global, css } from '@emotion/core';

const CarouselStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
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

export default CarouselStyles;
