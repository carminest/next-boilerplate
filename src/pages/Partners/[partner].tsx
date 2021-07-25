import React, { useCallback } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { DynamicPageProps, ImageType } from '@src/commons/constants/type';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useRouter } from 'next/router';
import { MediaQuery } from '@src/commons/style/media-query';

interface PartnerPageProps extends DynamicPageProps {
  partnerName: string;
  partnerImg: string;
  partnerSubImages: string[];
  partnerDescription: string;
}

const PartnerPage = (partnerPageProps: PartnerPageProps): JSX.Element => {
  const router = useRouter();
  const {
    partnerDescription,
    partnerImg,
    partnerName,
    partnerSubImages,
  } = partnerPageProps;

  const renderPartnerButtons = useCallback(() => {
    return (
      <PartnerButtonsContainer>
        {Object.values(PartnerInfoObject).map((partnerValue, index) => {
          return (
            <PartnerBtn
              selected={router.query.partner === partnerValue.code}
              key={index}
              onClick={() => {
                router.push(
                  '/Partners/[partner]',
                  `/Partners/${partnerValue.code}`,
                );
              }}
            >
              {partnerValue.name}
            </PartnerBtn>
          );
        })}
      </PartnerButtonsContainer>
    );
  }, [router.query]);

  const renderPartnerSubImgs = useCallback(() => {
    return partnerSubImages.map((sub, index) => (
      <img alt={''} src={sub} key={index} />
    ));
  }, [partnerSubImages]);

  return (
    <PartnerContainer>
      <PartnerBannerContainer />
      <PartnerHeader>
        <PartnerTitle>파트너사</PartnerTitle>
        <Position>HOME &gt; 파트너사</Position>
      </PartnerHeader>
      {renderPartnerButtons()}
      <PartnerDetailContainer>
        <img src={partnerImg} alt={''} />
        <PartnerTextDetailContainer>
          <PartnerName>{partnerName}</PartnerName>
          <BasePartnerDescription>{partnerDescription}</BasePartnerDescription>
          <PartnerRecommendComment>
            {partnerName}의 다채로운 컨텐츠를 지금 베이비비버에서 만나보세요.
          </PartnerRecommendComment>
          <PartnerSubImgs>{renderPartnerSubImgs()}</PartnerSubImgs>
        </PartnerTextDetailContainer>
      </PartnerDetailContainer>
    </PartnerContainer>
  );
};

const PartnerBannerContainer = styled.div`
  height: 310px;
  background-color: ${Color.PartnerBannerBgColor};
`;

const PartnerContainer = styled.div`
  padding: 80px 0 0;
  width: 100%;
`;

const PartnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 10px;
  border-bottom: solid 4px ${Color.Main};
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

const PartnerButtonsContainer = styled.div`
  display: grid;
  margin: 20px 0 0;
  grid-column-gap: 30px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(280px, 1fr);
  overflow-x: auto;
  ${MediaQuery.Mobile} {
    grid-column-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-columns: minmax(180px, 1fr);
  }
`;

const PartnerBtn = styled.button<{ selected: boolean }>`
  height: 70px;
  font-weight: 700;
  font-size: 25px;
  color: ${(props) => (props.selected ? Color.White : Color.Main)};
  border: solid 1px ${Color.Main};
  background-color: ${(props) => (props.selected ? Color.Main : Color.White)};
`;

const PartnerDetailContainer = styled.div`
  padding: 70px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${MediaQuery.Mobile} {
    display: grid;
  }
`;

const PartnerTextDetailContainer = styled.div`
  width: 570px;
  ${MediaQuery.Mobile} {
    margin-top: 30px;
    width: 100%;
    overflow: hidden;
  }
`;

const PartnerName = styled.h2`
  color: ${Color.Main};
  font-weight: 700;
  font-size: 34px;
`;

const BasePartnerDescription = styled.p`
  margin-top: 30px;
  color: ${Color.Gray200};
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const PartnerRecommendComment = styled(BasePartnerDescription)`
  margin-top: 60px;
  font-weight: 700;
`;

const PartnerSubImgs = styled.div`
  margin-top: 45px;
  display: grid;
  grid-column-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(auto-fill);
  grid-auto-flow: column;
  grid-auto-columns: auto;
  overflow-x: auto;
`;

const PartnerInfoObject = {
  AppleBee: {
    id: 0,
    name: '애플비',
    code: 'AppleBee',
    description:
      '봄날의 새순처럼 한 뼘 한 뼘 커 가는 우리 아이들의 꿈, 그 소중한 꿈이 자라는 곳마다 애플비가 함께 합니다.',
    images: [
      {
        type: ImageType.Thumbnail,
        url: '/partners/applebee/applebee_thumb.png',
        seq: 0,
      },
      {
        type: ImageType.Sub,
        url: '/partners/applebee/applebee_sub_0.png',
        seq: 1,
      },
      {
        type: ImageType.Sub,
        url: '/partners/applebee/applebee_sub_1.png',
        seq: 2,
      },
      {
        type: ImageType.Sub,
        url: '/partners/applebee/applebee_sub_2.png',
        seq: 3,
      },
    ],
  },
  Pingo: {
    id: 1,
    name: '핑고',
    code: 'Pingo',
    description: `참신한 아이디어를 콘텐츠화 시켜 시장을 개척하여 기획, 제작,라이센싱, 인터렉티브 콘텐츠 등 다양한 콘텐츠 문화산업을 이룩하고자 하는 종합 엔터테인먼트 회사입니다. 라틴어로 '그리다'라는 뜻인 핑고의 이름처럼 애니메이션에 대한 꿈을그려 나가겠습니다.`,
    images: [
      {
        type: ImageType.Thumbnail,
        url: '/partners/pingo/pingo_thumb.png',
        seq: 0,
      },
      {
        type: ImageType.Sub,
        url: '/partners/pingo/pingo_sub_0.png',
        seq: 1,
      },
      {
        type: ImageType.Sub,
        url: '/partners/pingo/pingo_sub_1.png',
        seq: 2,
      },
      {
        type: ImageType.Sub,
        url: '/partners/pingo/pingo_sub_2.png',
        seq: 3,
      },
    ],
  },
  RoiVisual: {
    id: 2,
    name: '로이 비쥬얼',
    code: 'RoiVisual',
    description: `아이들의 눈높이로 세상을 보고, 아이들의 마음으로 문제를 해결
      하는 자동차 구조대 ‘로보카 폴리’를 통해 아이들의 건강한 성장
      과 행복을 응원하며, 함께보는 어른들은 아이들의 마음을 더 잘
      이해하게 되기를 희망합니다.`,
    images: [
      {
        type: ImageType.Thumbnail,
        url: '/partners/roi/roi_thumb.png',
        seq: 0,
      },
      {
        type: ImageType.Sub,
        url: '/partners/roi/roi_sub_0.png',
        seq: 1,
      },
      {
        type: ImageType.Sub,
        url: '/partners/roi/roi_sub_1.png',
        seq: 2,
      },
    ],
  },
} as Record<string, PartnerType>;

interface PartnerType {
  readonly id: number;
  readonly name: string;
  readonly code: string;
  readonly description?: string;
  readonly images: {
    readonly type: ImageType;
    readonly url: string;
    readonly seq: number;
  }[];
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const partner = context.query.partner as string;
  const selectedPartner = PartnerInfoObject[partner] as PartnerType;
  if (!selectedPartner) {
    return {
      props: {},
    };
  }
  const thumbnail = selectedPartner.images?.find(
    (partnerImage) => partnerImage.type === ImageType.Thumbnail,
  )?.url;
  return {
    props: {
      title: selectedPartner.name,
      description: selectedPartner.description,
      imageUrl: thumbnail,
      partnerImg: thumbnail,
      partnerName: selectedPartner.name,
      partnerDescription: selectedPartner.description,
      partnerSubImages: selectedPartner.images
        ?.filter((partnerImage) => partnerImage.type === ImageType.Sub)
        ?.map((partnerImage) => partnerImage.url),
    } as PartnerPageProps,
  };
};

export default PartnerPage;
