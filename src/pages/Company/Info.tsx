import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { NavSub, NavMain, NavSec } from '@src/components/bodyComp/nav';

const CompanyComp = (): JSX.Element => {
  return (
    <MainSection>
      <NavSec>
        <NavMain>회사 소개</NavMain>
        <NavSub>HOME &gt; 비버블록 &gt; 회사소개</NavSub>
      </NavSec>
      <InfoDiv>
        <ImgSec>
          <ImgText>
            &quot; Delivering an engaging
            <br /> digital experience for kids &quot;
          </ImgText>
        </ImgSec>
        <InfoMiddle>
          <p>
            비버블록은 4차 산업혁명 시대에 앞장서{' '}
            <Bold>
              전 세계의 어린이들이 자유로운 온라인 공간에서 창의적이고
              <br /> 융합적인 꿈을 꿀 수 있도록 앱을 연구하고 개발
            </Bold>
            합니다. 자사 브랜드의 우수한 개발 콘텐츠와 높은 퀄리티의
            <br /> 글로벌 브랜드를 통합하여 최고의 미디어 콘텐츠를 제공함으로써
            <br /> 제대로 된 스팀교육, 차별화된 미디어 놀이공간을 합리적인
            비용으로 서비스합니다.
          </p>
        </InfoMiddle>
        <InfoSlogan>
          <p>
            전 세계의 어린이들이 새로운 세상을 만들어 나가는 주역이 될 수 있도록
            <br />
            비버블록은 매일을 노력하는 기업이 되겠습니다.
          </p>
        </InfoSlogan>
      </InfoDiv>
    </MainSection>
  );
};

const MainSection = styled.div`
  background-color: ${Color.White};
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const InfoDiv = styled.div`
  width: 1206px;
  text-align: center;
`;

const InfoMiddle = styled.div`
  min-width: 830px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  font-family: 'Noto Sans Myanmar';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const InfoSlogan = styled.div`
  min-width: 850px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans Myanmar';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  margin-bottom: 150px;
`;

const ImgSec = styled.div`
  width: 1206px;
  height: 373px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('http://beaverblock.com/images/company/companyinfo.png');
`;

const ImgText = styled.p`
  font-family: 'Noto Sans Myanmar';
  font-weight: 700;
  font-size: 40px;
  opacity: 0.8;
  color: ${Color.White};
  line-height: 60px;
`;

export default CompanyComp;
