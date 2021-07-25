import React from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import SimpleSlider from 'react-slick';

const BabyBeaver = (): JSX.Element => {
  return (
    <Wrap>
      <Content>
        <SimpleSlider />
      </Content>
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

const Content = styled.div`
  width: 900px;
  height: 580px;
  margin-bottom: 100px;
  background-color: ${Color.White};
`;

const Wrap = styled.div`
  min-width: 1080px;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  background-image: url('http://beaverblock.com/images/index/apple_btn.png');
  background-size: contain;
  width: 200px;
  height: 60px;
  display: inline-block;
  margin-right: 15px;
`;

const AndDownloadIcon = styled.div`
  background-image: url('http://beaverblock.com/images/index/google_btn.png');
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
