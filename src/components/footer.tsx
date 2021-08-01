import React from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';
import Color from '@src/commons/style/themes/colors';
import { MediaQuery } from '@src/commons/style/media-query';

const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <FooterComponent>
      <FooterMainContainer>
        <FooterLeftContainer>
          <FooterLeftTel>070-4353-0803</FooterLeftTel>
          <FooterLeftInfo>
            AM 11:00~ PM 4:00 토 / 일 / 공휴일 휴무
          </FooterLeftInfo>
        </FooterLeftContainer>
        <FooterMiddleContainer>
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
        </FooterMiddleContainer>
        <FooterRightInfo>
          <img src={Instagram} />
          <img src={Youtube} />
          <img src={Blog} />
        </FooterRightInfo>
      </FooterMainContainer>
    </FooterComponent>
  );
};

const policyList = [
  { label: '이용약관', path: '/Policy/Service' },
  { label: '개인정보 처리방침', path: '/Policy/Privacy' },
  { label: '환불정책', path: '/Policy/Refund' },
];

const Instagram =
  'http://beaverblock.com/images/footer/footer-instagram-btn.svg';

const Youtube = 'http://beaverblock.com/images/footer/footer-youtube-btn.svg';

const Blog = 'http://beaverblock.com/images/footer/footer-blog-btn.svg';

const PolicyContainer = styled.div`
  margin-bottom: 30px;
  ${MediaQuery.Mobile} {
    margin-top: 30px;
  }
`;

const Policy = styled.span`
  cursor: pointer;
  color: ${Color.White};
  padding: 0 10px;
  border-right: solid 1px ${Color.White};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  &:last-of-type {
    border: none;
  }
  &:first-of-type {
    padding-left: 0;
  }
  ${MediaQuery.Mobile} {
    order: 3;
  }
`;

const FooterComponent = styled.div`
  background-color: #596161;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const FooterMainContainer = styled.div`
  ${MediaQuery.PC} {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.2fr;
    align-items: center;
    min-width: 1080px;
    max-height: 235px;
    padding: 20px 120px;
  }
  ${MediaQuery.Mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: column-reverse;
    max-height: 1000px;
  }
`;

const FooterLeftContainer = styled.div`
  min-width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${MediaQuery.Mobile} {
    display: none;
  }
`;

const FooterLeftTel = styled.div`
  min-width: 210px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const FooterLeftInfo = styled.div`
  min-width: 240px;
  font-size: 16px;
  color: white;
`;

const FooterMiddleContainer = styled.div`
  ${MediaQuery.PC} {
    min-width: 650px;
  }
  ${MediaQuery.Mobile} {
    min-width: 360px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
`;

const FooterMiddleTop = styled.div`
  color: white;
  font-size: 20px;
  ${MediaQuery.Mobile} {
    order: 2;
  }
`;
const FooterMiddleCenter = styled.div`
  min-width: 500px;
  color: white;
  font-weight: 500;
  ${MediaQuery.Mobile} {
    order: 1;
    height: 160px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Color.Grayscale300};
    min-width: 360px;
  }
`;
const FooterMiddleBottom = styled.div`
  color: white;
  padding-top: 25px;
  font-weight: 350;
  ${MediaQuery.Mobile} {
    order: 2;
  }
`;

const FooterRightInfo = styled.div`
  ${MediaQuery.PC} {
    display: flex;
    justify-content: space-between;
    min-width: 160px;
  }
  ${MediaQuery.Mobile} {
    height: 120px;
    min-width: 180px;
  }
`;

export default Footer;
