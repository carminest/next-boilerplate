import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { DynamicPageProps } from '@src/commons/constants/type';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

type Partner = {
  title: string;
  code: string;
  description: string;
  imageUrl: string;
  subImageUrls: string[];
};

const partnerList = [
  {
    title: '애플비',
    description: `봄날의 새순처럼 한 뼘 한 뼘 커 가는 우리 아이들의 꿈,
    그 소중한 꿈이 자라는 곳마다 애플비가 함께 합니다.`,
    code: 'AppleBee',
    imageUrl: '',
    subImageUrls: ['', '', ''],
  },
  {
    title: '핑고엔터테인먼트',
    description: `참신한 아이디어를 콘텐츠화 시켜 시장을 개척하여 기획, 제작,
    라이센싱, 인터렉티브 콘텐츠 등 다양한 콘텐츠 문화산업을 이룩
    하고자 하는 종합 엔터테인먼트 회사입니다. 라틴어로 '그리다'
    라는 뜻인 핑고의 이름처럼 애니메이션에 대한 꿈을
    그려 나가겠습니다.`,
    code: 'Pingo',
    imageUrl: '',
    subImageUrls: ['', '', ''],
  },
  {
    title: '로이비쥬얼',
    description: `아이들의 눈높이로 세상을 보고, 아이들의 마음으로 문제를 해결
    하는 자동차 구조대 ‘로보카 폴리’를 통해 아이들의 건강한 성장
    과 행복을 응원하며, 함께보는 어른들은 아이들의 마음을 더 잘
    이해하게 되기를 희망합니다.`,
    code: 'RoiVisual',
    imageUrl: '',
    subImageUrls: ['', '', ''],
  },
] as Partner[];
interface PartnerPageProps extends DynamicPageProps {
  partnerName: string;
  partnerImg: string;
  partnerDescription: string;
}

const PartnerPage = (partnerPageProps: PartnerPageProps): JSX.Element => {
  const { partnerDescription, partnerImg, partnerName } = partnerPageProps;

  return (
    <PartnerContainer>
      <PartnerHeader>
        <PartnerTitle>파트너사</PartnerTitle>
        <Position>HOME &gt; 파트너사</Position>
      </PartnerHeader>
      <img src={partnerImg} alt={''} />
      <h2>{partnerName}</h2>
      <p>{partnerDescription}</p>
    </PartnerContainer>
  );
};

const PartnerContainer = styled.div`
  padding: 80px 0 0;
`;

const PartnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PartnerTitle = styled.h1`
  color: ${Color.Main};
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
`;

const Position = styled.span`
  color: #2c2c2c;
  font-size: 15px;
  line-height: 1.5;
`;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<any>,
) => {
  return {
    props: {
      title: 'AppleBe',
      description: '애플비',
      imageUrl: '',
      partnerImg: 'https://picsum.photos/536/354',
      partnerName: '로이 비쥬얼',
      partnerDescription:
        '아이들의 눈높이로 세상을 보고, 아이들의 마음으로 문제를 해결 하는 자동차 구조대 ‘로보카 폴리’를 통해 아이들의 건강한 성장과 행복을 응원하며, 함께보는 어른들은 아이들의 마음을 더 잘이해하게 되기를 희망합니다.',
    } as PartnerPageProps,
  };
};

export default PartnerPage;
