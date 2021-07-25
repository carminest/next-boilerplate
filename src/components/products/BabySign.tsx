import React from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

const BabySign = (): JSX.Element => {
  return (
    <>
      <Main>
        <MainWrapper>
          <Content>
            <ContentImage
              src={'http://beaverblock.com/images/product/page.png'}
            />
            <PurchaseButtonImage
              src={'/resetting_btn.svg'}
              onClick={() => {
                window.open('https://smartstore.naver.com/beaverblock');
              }}
            />
          </Content>
        </MainWrapper>
      </Main>
    </>
  );
};

export default BabySign;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PurchaseButtonImage = styled.img`
  position: absolute;
  cursor: pointer;
  left: 550px;
  bottom: 120px;
  width: 347px;
  height: 70px;
  background: ${Color.White} 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1206px;
  background-color: ${Color.White};
`;

const Content = styled.div`
  width: 1206px;
  margin-bottom: 100px;
  background-color: ${Color.White};
  position: relative;
`;

const ContentImage = styled.img`
  width: 1206px;
  height: 2490px;
  object-fit: contain;
`;
