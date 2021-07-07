import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { testApi } from '@src/containers/Test/api';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import api from '@src/utils/AxiosUtils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Color from '@src/commons/style/themes/colors';

const IndexPage = (): JSX.Element => {
  const LeftCont = () => {
    const [click, setClick] = useState('none');

    const onDetailClick = () => {
      alert(click);
      setClick('clicked');
    };

    return (
      <>
        <Cont>
          <Title>비버블록 커리큘럼</Title>
          <Sub>
            누리 과정을 바탕으로 우리 아이에게
            <br />
            알맞는 콘텐츠를 찾아보세요.
          </Sub>
          <SeeDetails onClick={onDetailClick}>자세히보기 &gt;</SeeDetails>

          <CharImg side="left" />
        </Cont>
      </>
    );
  };

  const SimpleSlider = (): JSX.Element => {
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
        <Slider {...settings} dotsClass="test-css">
          <Slide color={Color.BabySign}>
            <SlideWrap>
              <SlideContent>
                <SlideTitle>핌핌 베이비싸인 키트</SlideTitle>
                <ProductIntroduce>
                  우리 아이가 처음 만나는 ‘핌핌 베이비싸인’ 언어학습카드 <br />
                  우리 아이의 마음까지 세심하게 챙겨주세요.
                </ProductIntroduce>
                <DetailButton
                  onClick={() =>
                    window.open('https://smartstore.naver.com/beaverblock')
                  }
                  src={'/ok_but.svg'}
                />
                <ProductImage src={'/kit_img@2x.png'} />
                <ProductEffect src={'/index_effect.svg'} />
              </SlideContent>
            </SlideWrap>
          </Slide>
          <Slide color={Color.BabyBeaver}>
            <SlideWrap>
              <SlideContent>
                <SlideTitle>베이비비버 APP</SlideTitle>
                <ProductIntroduce>
                  국내 최초 베이비싸인 콘텐츠를 포함한 <br /> 인터렉션 중심의
                  재미있는 학습앱
                </ProductIntroduce>

                <MobileImage src={'/mobile_img@2x.png'} />
                <ProductEffect src={'/index_effect.svg'} />
                <AppButton top={'300px'} src={'/apple_but/apple_but.png'} />
                <AppButton top={'370px'} src={'/google_but/google_but.png'} />
              </SlideContent>
            </SlideWrap>
          </Slide>
        </Slider>
      </Wrap>
    );
  };

  const RightCont = () => {
    return (
      <>
        <Cont>
          <Title>비버블록 이야기</Title>
          <Sub>
            비버블록의 공식 블로그를
            <br />
            통해 새로운 소식을 만나보세요.
          </Sub>
          <SeeDetails>자세히보기 &gt;</SeeDetails>

          <CharImg side="right" />
        </Cont>
      </>
    );
  };

  return (
    <>
      <SimpleSlider />
      <BodyFirstSec>
        <Container>
          <YoutubeContainer src={'/mobile_img.svg'} />
          <YoutubeInfo>
            <YoutubeTitle>비버블록 TV</YoutubeTitle>
            <YoutubeText>
              비버블록에서 출시되는 다양한 유아동 컨텐츠를 소개,
              <br /> 전속 모델 루하와 함께 활영한 다양한 유아동 영상을
              업로드합니다.
            </YoutubeText>
            <YoutubeButton src={'/youtube_but.svg'} />
          </YoutubeInfo>
        </Container>
      </BodyFirstSec>
      <BodySecondSec>
        <LeftCont />
        <RightCont />
      </BodySecondSec>
    </>
  );
};

const left = 'http://beaverblock.com/images/index/Lua-Icon.png';
const right = 'http://beaverblock.com/images/index/Character2.png';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 1200px;
`;

const SlideContent = styled.div`
  height: 100%;
  width: 1200px;
  position: relative;
`;

const AppButton = styled.img<{ top: string }>`
  position: absolute;
  display: block;
  top: ${(props) => props.top};
`;

const SlideWrap = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
`;

const DetailButton = styled.img`
  position: absolute;
  top: 300px;
  cursor: pointer;
`;

const ProductEffect = styled.img`
  position: absolute;
  right: -150px;
  bottom: 5px;
  width: 834px;
  height: 592px;
  background: transparent url('img/effect.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const MobileImage = styled.img`
  position: absolute;
  width: 658px;
  height: 316px;
  z-index: 999;
  right: 0px;
  bottom: 140px;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 771px;
  height: 289px;
  z-index: 999;
  right: -20px;
  bottom: 140px;
`;

const ProductIntroduce = styled.div`
  font: normal normal normal 20px/26px Noto Sans Kannada;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position: absolute;
  top: 200px;
`;

const Wrap = styled.div`
  margin-top: 96px;
`;

const Slide = styled.div`
  background: ${(props) => props.color};
  width: 100%;
  height: 592px;
  position: relative;
`;
const SlideTitle = styled.div`
  font: normal normal bold 50px/67px Noto Sans Kannada;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position: absolute;
  top: 130px;
`;

const CharImg = styled.div<{ side: string }>`
  background-image: url(${(props) => (props.side === 'left' ? left : right)});
  background-size: contain;
  display: inline-block;
  position: relative;
  bottom: 85px;
  left: 280px;
  width: 250px;
  height: 230px;
`;

const BodyFirstSec = styled.div`
  height: 592px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const YoutubeContainer = styled.img`
  top: 138px;
  width: 658px;
  height: 316px;
  position: absolute;
`;

const YoutubeInfo = styled.div`
  height: 100%;
  position: absolute;
  border: 2px solid black;
  right: 0px;
  text-align: right;
`;

const YoutubeTitle = styled.div``;
const YoutubeText = styled.div``;
const YoutubeButton = styled.img``;

const BodySecondSec = styled.div`
  height: 630px;
  width: 100%;
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7d8;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  width: 100%;
  padding-top: 30px;
`;

const Sub = styled.div`
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  padding-top: 30px;
`;

const Cont = styled.span`
  display: inline-block;
  width: 560px;
  height: 440px;
  background-color: #f8b8dd;
  padding: 50px 30px;
`;

const SeeDetails = styled.div`
  font-weight: 700;
  font-size: 26px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-position: under;
  padding-top: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export default IndexPage;
