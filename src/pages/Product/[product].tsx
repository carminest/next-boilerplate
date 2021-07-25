import { ProductCode } from '@src/commons/constants/enum';
import { DynamicPageProps, ImageType } from '@src/commons/constants/type';
import Color from '@src/commons/style/themes/colors';
import styled from '@src/commons/style/themes/styled';
import { NavSec, NavMain, NavSub } from '@src/components/bodyComp/nav';
import BabyBeaver from '@src/components/products/BabyBeaver';
import BabySign from '@src/components/products/BabySign';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

interface ProductPageProps extends DynamicPageProps {
  productImg: string;
  productDescription: string;
  productName: string;
  productCode: ProductCode;
  productTitle: string;
  productColor: string;
}
interface ProductType {
  readonly id: number;
  readonly name: string;
  readonly title?: string;
  readonly code: ProductCode;
  readonly description?: string;
  readonly color: string;
  readonly images: {
    readonly type: ImageType;
    readonly url: string;
    readonly seq: number;
  }[];
}

const ProductInfoObject = {
  BabySign: {
    id: 0,
    title: '핌핌 베이비싸인 키트',
    name: '베이비 사인',
    code: ProductCode.BabySign,
    description:
      '우리 아이가 처음 만나는 ‘핌핌 베이비싸인’ 언어학습카드 우리 아이의 마음까지 세심하게 챙겨주세요.',
    images: [
      {
        type: ImageType.Thumbnail,
        url: '/products/baby_sign@2x.png',
        seq: 0,
      },
    ],
    color: Color.BabySign,
  },
  BabyBeaver: {
    id: 1,
    title: '베이비비버 APP',
    name: '베이비 비버',
    code: ProductCode.BabyBeaver,
    description:
      '국내 최초 베이비싸인 콘텐츠를 포함한 인터렉션 중심의 재미있는 학습앱!',
    images: [
      {
        type: ImageType.Thumbnail,
        url: '/products/baby_beaver@2x.png',
        seq: 0,
      },
    ],
    color: Color.BabyBeaver,
  },
} as Record<string, ProductType>;

const Product = (productPageProps: ProductPageProps): JSX.Element => {
  const router = useRouter();

  const {
    productImg,
    productDescription,
    productName,
    productCode,
    productTitle,
    productColor,
  } = productPageProps;

  const renderProductButtons = () => {
    return (
      <>
        {Object.values(ProductCode).map((product, index) => (
          <ButtonLi
            currentMenu={product === router.query.product}
            key={index}
            onClick={() => router.push('/Product/[product]', product)}
          >
            {ProductInfoObject[product].name}
          </ButtonLi>
        ))}
      </>
    );
  };

  const renderProductInfo = useCallback(() => {
    switch (productCode) {
      case ProductCode.BabySign: {
        return <BabySign />;
      }
      case ProductCode.BabyBeaver: {
        return <BabyBeaver />;
      }
    }
  }, [productCode]);

  return (
    <>
      <ProductContentContainer backgroundColor={productColor}>
        <ProductDiv>
          <ProductInfoContainer>
            <ProductTitle>{productTitle}</ProductTitle>
            <ProductIntroduce>{productDescription}</ProductIntroduce>
          </ProductInfoContainer>
          <ProductImgContainer>
            <ProductImage src={productImg} />
            <ProductEffect src={'/effect.svg'} />
          </ProductImgContainer>
        </ProductDiv>
      </ProductContentContainer>
      <MainSec>
        <NavSec>
          <NavMain>제품</NavMain>
          <NavSub>HOME &gt; 제품 &gt; {productName}</NavSub>
        </NavSec>
        <ButtonContainer>
          <ButtonUl>{renderProductButtons()}</ButtonUl>
        </ButtonContainer>
      </MainSec>
      {renderProductInfo()}
    </>
  );
};

const ProductContentContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || Color.White};
  height: 310px;
  margin-top: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 calc(-50vw + 25%); */
`;

const ProductDiv = styled.div`
  min-width: 1080px;
  max-width: 1920px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoContainer = styled.div`
  display: inline-block;
  margin-top: 100px;
`;
const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 20px;
`;
const ProductIntroduce = styled.div`
  font-weight: 700;
  font-size: 17px;
  max-width: 500px;
  white-space: break-spaces;
`;

const ProductImgContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 477px;
  height: 241px;
  right: 20px;
  top: 100px;
  z-index: 9;
`;

const ProductEffect = styled.img`
  position: absolute;
  top: 0px;
  right: -170px;
  height: 303px;
  background: transparent url('img/effect.png') 0% 0% no-repeat padding-box;
  opacity: 1;
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

const ButtonContainer = styled.div`
  width: 1206px;
`;

const MainSec = styled.div`
  max-width: 1920px;
  min-width: 1080px;
  background-color: ${Color.White};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const product = context.query.product as string;
  const selectedProduct = ProductInfoObject[product] as ProductType;
  if (!selectedProduct) {
    return {
      props: {},
    };
  }
  const thumbnail = selectedProduct.images?.find(
    (partnerImage) => partnerImage?.type === ImageType.Thumbnail,
  )?.url;
  return {
    props: {
      title: selectedProduct.name || '',
      description: selectedProduct.description || '',
      imageUrl: thumbnail || '',
      productDescription: selectedProduct.description || '',
      productImg: thumbnail || '',
      productName: selectedProduct.name || '',
      productCode: selectedProduct.code || '',
      productTitle: selectedProduct.title || '',
      productColor: selectedProduct.color || '',
    } as ProductPageProps,
  };
};

export default Product;
