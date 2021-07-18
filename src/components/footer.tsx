import React from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';
import Color from '@src/commons/style/themes/colors';

const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
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
            <PolicyContainer>
              {policyList.map((policy, index) => (
                <Policy
                  key={index}
                  onClick={() => {
                    router.push(policy.path).then(() => {
                      scrollTo(0, 0);
                    });
                  }}
                >
                  {policy.label}
                </Policy>
              ))}
            </PolicyContainer>
          </FooterMiddleTop>
          <FooterMiddleCenter>
            (주) 비버블록
            <br />
            경기도 수원시 영통구 법조로 25, 2805호(광교SK뷰레이크,업무시설 A동)
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
          <img src={Instagram} />
          <img src={Youtube} />
          <img src={Blog} />
        </FooterRightInfo>
      </FooterMainCont>
    </Fbody>
  );
};

const PolicyContainer = styled.div`
  margin-bottom: 30px;
`;

const Policy = styled.span`
  cursor: pointer;
  color: ${Color.White};
  padding: 0 10px;
  border-right: solid 1px ${Color.White};
  font-family: 'NotoSans Kannada-Regular';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  &:last-child {
    border: none;
  }
  &:first-child {
    padding-left: 0;
  }
`;

const Fbody = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1920px;
  min-width: 1080px;
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
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterLeftTel = styled.div`
  /* border: 2px solid greenyellow; */
  min-width: 210px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const FooterLeftInfo = styled.div`
  /* border: 2px solid greenyellow; */
  min-width: 240px;
  font-size: 16px;
  color: white;
`;

const FooterMiddleCont = styled.div`
  /* border: 2px solid greenyellow; */
  min-width: 449px;
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

const policyList = [
  { label: '이용약관', path: '/Policy/Service' },
  { label: '개인정보 처리방침', path: '/Policy/Privacy' },
  { label: '환불정책', path: '/Policy/Refund' },
];

const Instagram =
  'http://beaverblock.com/images/footer/footer-instagram-btn.svg';

const Youtube = 'http://beaverblock.com/images/footer/footer-youtube-btn.svg';

const Blog = 'http://beaverblock.com/images/footer/footer-blog-btn.svg';

export default Footer;
