import React, { Component } from 'react';
import styled from '@src/commons/style/themes/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { runInThisContext } from 'vm';

const Simpleslider = (): JSX.Element => {
  const Wrap = styled.div``;

  const Slide1 = styled.div`
    background: #b359c5;
    width: 100%;
    height: 550px;
  `;
  const Slide2 = styled.div`
    background: orange;
    width: 100%;
    height: 550px;
  `;
  const Slide3 = styled.div`
    background: #00ffd581;
    width: 100%;
    height: 550px;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Wrap>
      <Slider {...settings}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Slider>
    </Wrap>
  );
};

export default Simpleslider;
