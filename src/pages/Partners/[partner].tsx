import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { DynamicPageProps, ListType } from '@src/commons/constants/type';

interface PartnerPageProps extends DynamicPageProps {
  partnerName: string;
  partnerImg: string;
  partnerDescription: string;
}

const PartnerPage = (partnerPageProps: PartnerPageProps): JSX.Element => {
  const { partnerDescription, partnerImg, partnerName } = partnerPageProps;

  return (
    <>
      {/* <img src={partnerImg} alt={''} />
      <h2>{partnerName}</h2>
      <p>{partnerDescription}</p> */}
    </>
  );
};

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
