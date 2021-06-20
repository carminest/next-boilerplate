import React, { Component } from 'react';
import styled from '@src/commons/style/themes/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { runInThisContext } from 'vm';

export default class SimpleSlider extends Component {
  Wrap = styled.div`
    padding-top: 100px;
  `;

  Slide1 = styled.div`
    background: #b359c5;
    width: 100%;
    height: 550px;
  `;
  Slide2 = styled.div`
    background: orange;
    width: 100%;
    height: 550px;
  `;
  Slide3 = styled.div`
    background: #00ffd581;
    width: 100%;
    height: 550px;
  `;

  render() {
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
      <this.Wrap>
        <Slider {...settings}>
          <this.Slide1 />
          <this.Slide2 />
          <this.Slide3 />
        </Slider>
      </this.Wrap>
    );
  }
}
