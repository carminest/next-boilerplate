import React from 'react';
import { useRouter } from 'next/router';
import styled from '@commons/style/themes/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Color from '@src/commons/style/themes/colors';
import Iframe from 'react-iframe';
import CarouselStyles from '../commons/style/carousel';

const IndexPage = (): JSX.Element => {
  const router = useRouter();

  const LeftCont = () => {
    return (
      <Cont side="left">
        <Title>비버블록 커리큘럼</Title>
        <Sub>
          누리 과정을 바탕으로 우리 아이에게
          <br />
          알맞는 콘텐츠를 찾아보세요.
        </Sub>
        <SeeDetails
          onClick={() => {
            router.push('/Company/Curriculum').then(() => {
              scrollTo(0, 0);
            });
          }}
        >
          자세히보기 &gt;
        </SeeDetails>

        <CharImg side="left" />
      </Cont>
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
      <>
        <CarouselStyles />
        <Wrap>
          <Slider {...settings} dotsClass="test-css">
            <Slide color={Color.BabySign}>
              <SlideWrap>
                <SlideContent>
                  <SlideTitle>핌핌 베이비싸인 키트</SlideTitle>
                  <ProductIntroduce>
                    우리 아이가 처음 만나는 ‘핌핌 베이비싸인’ 언어학습카드{' '}
                    <br />
                    우리 아이의 마음까지 세심하게 챙겨주세요.
                  </ProductIntroduce>
                  <DetailButton
                    onClick={() =>
                      window.open('https://smartstore.naver.com/beaverblock')
                    }
                    src={'/ok_btn.svg'}
                  />
                  <ProductImage src={'/products/baby_sign@2x.png'} />
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

                  <MobileImage src={'/products/baby_beaver@2x.png'} />
                  <ProductEffect src={'/index_effect.svg'} />
                  <AppButton top={'300px'} src={'/apple_btn/apple_btn.png'} />
                  <AppButton top={'370px'} src={'/google_btn/google_btn.png'} />
                </SlideContent>
              </SlideWrap>
            </Slide>
          </Slider>
        </Wrap>
      </>
    );
  };

  const RightCont = () => {
    return (
      <>
        <Cont side="right">
          <Title>비버블록 이야기</Title>
          <Sub>
            비버블록의 공식 블로그를
            <br />
            통해 새로운 소식을 만나보세요.
          </Sub>
          <SeeDetails
            onClick={() => {
              router.push('https://blog.naver.com/beaverblock').then(() => {
                scrollTo(0, 0);
              });
            }}
          >
            자세히보기 &gt;
          </SeeDetails>

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
          <Youtube>
            <Iframe
              id="player"
              width="580px"
              height="292px"
              url="https://www.youtube.com/embed/oj3b4jvLco4"
              position="absolute"
              allowFullScreen
            ></Iframe>
          </Youtube>
          <YoutubeInfo>
            <YoutubeTitle>비버블록 TV</YoutubeTitle>

            <YoutubeText>
              비버블록에서 출시되는 다양한 유아동 컨텐츠를 소개,
              <br /> 전속 모델 루하와 함께 활영한 다양한 유아동 영상을
              업로드합니다.
            </YoutubeText>
            <YoutubeButton
              onClick={() => {
                window.open(
                  'https://www.youtube.com/channel/UC0xCPEDCzkKrMSGdcLsF6tA',
                );
              }}
              src={'/youtube_btn.svg'}
            />
          </YoutubeInfo>
        </Container>
      </BodyFirstSec>
      <BodySecondSec>
        <DetailContainer>
          <LeftCont />
          <RightCont />
        </DetailContainer>
      </BodySecondSec>
    </>
  );
};

const left = 'http://beaverblock.com/images/index/Lua-Icon.png';
const right = 'http://beaverblock.com/images/index/Character2.png';

const DetailContainer = styled.div`
  width: 1206px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  min-width: 1080px;
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
  z-index: 10;
  right: 0px;
  bottom: 140px;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 771px;
  height: 289px;
  z-index: 10;
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
  margin: 96px -30px 0;
`;

const Slide = styled.div`
  background: ${(props) => props.color};
  min-width: 1080px;
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
  width: 687px;
  height: 342px;
  position: absolute;
`;

const Youtube = styled.div`
  position: absolute;
  left: 55px;
  top: 150px;
`;

const YoutubeInfo = styled.div`
  height: 100%;
  position: absolute;
  right: 0px;
  text-align: right;
`;

const YoutubeTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-top: 175px;
`;
const YoutubeText = styled.div`
  font-size: 18px;
  margin-top: 30px;
`;
const YoutubeButton = styled.img`
  margin-top: 45px;
  cursor: pointer;
`;

const BodySecondSec = styled.div`
  height: 630px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Cont = styled.span<{ side: string }>`
  display: inline-block;
  min-width: 560px;
  height: 440px;
  background-color: ${(props) =>
    props.side === 'left' ? Color.Left : Color.Right};
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
