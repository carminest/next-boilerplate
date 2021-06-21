import React from 'react';
import styled from '@src/commons/style/themes/styled';

const Footer = (): JSX.Element => {
  return (
    <>
      <Fbody>
        <FooterMainCont>
          <FooterLeftCont>
            <FooterLeftTel>070-4353-0803</FooterLeftTel>
            <FooterLeftInfo>
              AM 11:00~ PM 4:00 토 / 일 / 공휴일 휴무
            </FooterLeftInfo>
          </FooterLeftCont>
          <FooterMiddleCont>
            <FooterMiddleTop>
              이용약관 | 개인정보 처리방침 | 환불정책
            </FooterMiddleTop>
            <FooterMiddleCenter>
              (주) 비버블록
              <br />
              경기도 수원시 영통구 법조로 25, 2805호(광교SK뷰레이크,업무시설
              A동)
              <br />
              Tel : 070-4353-0803
              <br />
              Mail: help@beaverblock.com
            </FooterMiddleCenter>
            <FooterMiddleBottom>
              © Beaverblock Co., Ltd. All Rights Reserved 2021
            </FooterMiddleBottom>
          </FooterMiddleCont>
          <FooterRightInfo>
            <img className="icons" src={Instagram} />
            <img className="icons" src={Youtube} />
            <img className="icons" src={Blog} />
          </FooterRightInfo>
        </FooterMainCont>
      </Fbody>
    </>
  );
};

const Fbody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #596161;
`;

const FooterMainCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px;
  width: 1440px;
  height: 235px;
`;

const FooterLeftCont = styled.div`
  /* border: 2px solid greenyellow; */
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterLeftTel = styled.div`
  /* border: 2px solid greenyellow; */
  width: 100%;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const FooterLeftInfo = styled.div`
  /* border: 2px solid greenyellow; */
  width: 100%;
  font-size: 16px;
  color: white;
`;

const FooterMiddleCont = styled.div`
  /* border: 2px solid greenyellow; */
  width: 33vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterMiddleTop = styled.div`
  /* border: 1px solid greenyellow; */
  height: 33%;
  color: white;
  font-size: 20px;
`;
const FooterMiddleCenter = styled.div`
  /* border: 1px solid greenyellow; */
  height: 33%;
  color: white;
  font-weight: 500;
`;
const FooterMiddleBottom = styled.div`
  /* border: 1px solid greenyellow; */
  height: 33%;
  color: white;
  padding-top: 25px;
  font-weight: 350;
`;

const FooterRightInfo = styled.div`
  /* border: 2px solid greenyellow; */
  width: 10vw;
  display: flex;
  justify-content: space-around;
`;

const Instagram =
  'http://beaverblock.com/images/footer/footer-instagram-btn.svg';

const Youtube = 'http://beaverblock.com/images/footer/footer-youtube-btn.svg';

const Blog = 'http://beaverblock.com/images/footer/footer-blog-btn.svg';

export default Footer;
