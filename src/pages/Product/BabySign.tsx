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

const BabySign = (): JSX.Element => {
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
    <>
      <ProductSection></ProductSection>
      <MainSection>
        <NavSec>
          <NavMain>제품</NavMain>
          <NavSub>HOME &gt; 제품 &gt; 베이비비버</NavSub>
        </NavSec>
        <ButtonUl>{renderProductButtons()}</ButtonUl>
        <Content>
          <ContentImage
            src={'http://beaverblock.com/images/product/page.png'}
          />
          <PurchaseButtonImage
            src={'/resetting_but.svg'}
            onClick={() => {
              window.open('https://smartstore.naver.com/beaverblock');
            }}
          />
        </Content>
      </MainSection>
    </>
  );
};

export default BabySign;

const PurchaseButtonImage = styled.img`
  position: relative;
  cursor: pointer;
  left: 550px;
  bottom: 200px;
  width: 347px;
  height: 70px;
  background: ${Color.White} 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const MainSection = styled.div`
  padding-left: 22vw;
  padding-right: 22vw;
  background-color: ${Color.White};
`;

const ProductSection = styled.div`
  width: 100%;
  background-color: ${Color.Main};
  height: 310px;
  margin-top: 96px;
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
  border: 2px solid ${Color.Main};
  font-family: 'Noto Sans Kannada';
  font-weight: 700;
  font-size: 25px;
  color: ${Color.Main};
  line-height: 75px;
  cursor: pointer;
  background-color: ${(props) =>
    props.currentMenu === true ? Color.Main : Color.White};
  color: ${(props) => (props.currentMenu === true ? Color.White : Color.Main)};
`;

const DownloadInfo = styled.div`
  width: 100%;
  height: 580px;
  background-color: ${Color.Grayscale300};
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background-color: ${Color.White};
`;

const ContentImage = styled.img`
  width: 1206px;
  height: 2490px;
  object-fit: contain;
`;
