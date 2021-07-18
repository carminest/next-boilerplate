import React, { EventHandler, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@src/commons/style/themes/styled';
import { NavSub, NavMain, NavSec } from '@src/components/bodyComp/nav';
import Color from '@src/commons/style/themes/colors';
import SimpleSlider from '@src/components/bodyComp/carousel';

type Product = {
  name: string;
  url: string;
  value: number;
  content: string;
};

const productList: Product[] = [
  { name: '베이비비버', url: '/Product/BabyBeaver', value: 1, content: '' },
  { name: '핌핌 베이비싸인', url: '/Product/BabySign', value: 2, content: '' },
];

const BabyBeaver = (): JSX.Element => {
  const [currentMenu, setCurrentMenu] = useState(false);
  const router = useRouter();

  //map돌린다 => url이 aspath와 같다? setstate true
  const renderProductButtons = () => {
    return (
      <>
        {productList.map((product) => (
          <ButtonLi
            currentMenu={product.url === router.asPath && true}
            key={product.value}
            onClick={() => router.push(product.url)}
          >
            {product.name}
          </ButtonLi>
        ))}
      </>
    );
  };

  return (
    <Wrap>
      <ProductSection>
        <ProductDiv>
          <ProductText>
            <ProductTitle>베이비비버 APP</ProductTitle>
            <ProductIntroduce>
              국내 최초 베이비싸인 콘텐츠를 포함한
              <br /> 인터렉션 중심의 재미있는 학습앱!
            </ProductIntroduce>
          </ProductText>
          <ProductImage src={'/mobile_img.png'} />

          <ProductEffect src={'/effect.svg'} />
        </ProductDiv>
      </ProductSection>
      <MainSec>
        <NavSec>
          <NavMain>제품</NavMain>
          <NavSub>HOME &gt; 제품 &gt; 베이비비버</NavSub>
        </NavSec>
        <ButtonContainer>
          <ButtonUl>{renderProductButtons()}</ButtonUl>
        </ButtonContainer>
        <Content>
          <SimpleSlider />
        </Content>
      </MainSec>
      <DownloadInfo>
        <AppIcon />
        <AppSentence>
          지금 스토어에서
          <br />
          베이비 비버 앱을 만나보세요!
        </AppSentence>
        <Icons>
          <IOSDownloadIcon />
          <AndDownloadIcon />
        </Icons>
      </DownloadInfo>
    </Wrap>
  );
};

export default BabyBeaver;

const ButtonContainer = styled.div`
  width: 1206px;
`;

const Wrap = styled.div`
  min-width: 1080px;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProductEffect = styled.img`
  position: absolute;
  top: 0px;
  right: -170px;
  width: 834px;
  height: 303px;
  background: transparent url('img/effect.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const ProductDiv = styled.div`
  min-width: 1080px;
  height: 100%;
  position: relative;
`;

const MainSec = styled.div`
  max-width: 1920px;
  min-width: 1080px;

  background-color: ${Color.White};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProductSection = styled.div`
  width: 100%;
  background-color: ${Color.BabySign};
  height: 310px;
  margin-top: 96px;
  padding-left: 22vw;
  padding-right: 22vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
`;

const ButtonLi = styled.li<{ currentMenu: boolean }>`
  display: flex;
  justify-content: center;
  float: left;
  width: 280px;
  height: 70px;
  margin-right: 30px;
  font-weight: 700;
  font-size: 25px;
  color: ${Color.Main};
  line-height: 75px;
  border: 2px solid ${Color.Main};
  cursor: pointer;
  background-color: ${(props) =>
    props.currentMenu === true ? Color.Main : Color.White};
  color: ${(props) => (props.currentMenu === true ? Color.White : Color.Main)};
`;

const DownloadInfo = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  background-color: ${Color.Grayscale300};
`;
const AppIcon = styled.div`
  background-image: url('http://beaverblock.com/images/product/app_image.png');
  width: 100%;
  height: 170px;
  background-repeat: no-repeat;
  background-position: center;
`;

const AppSentence = styled.p`
  font-weight: 700;
  font-size: 35px;
  color: black;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
`;

const IOSDownloadIcon = styled.div`
  background-image: url('http://beaverblock.com/images/index/apple_but.png');
  background-size: contain;
  width: 200px;
  height: 60px;
  display: inline-block;
  margin-right: 15px;
`;

const AndDownloadIcon = styled.div`
  background-image: url('http://beaverblock.com/images/index/google_but.png');
  background-size: contain;
  width: 200px;
  height: 60px;
  display: inline-block;
`;

const Icons = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductText = styled.div`
  display: inline-block;
  position: absolute;
  top: 100px;
`;
const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 20px;
`;
const ProductIntroduce = styled.div`
  font-weight: 700;
  font-size: 17px;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 477px;
  height: 241px;
  right: 20px;
  top: 100px;
  z-index: 9;
`;

const Content = styled.div`
  width: 900px;
  height: 580px;
  margin-bottom: 100px;
  background-color: ${Color.White};
`;
