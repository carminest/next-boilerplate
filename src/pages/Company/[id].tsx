import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@src/commons/style/themes/styled';

type history = {
  year: number;
  month: number;
  content: string;
};

const histories: history[] = [
  {
    year: 2020,
    month: 1,
    content: '1월',
  },
  {
    year: 2020,
    month: 2,
    content: '2월',
  },
  {
    year: 2020,
    month: 3,
    content: '3월',
  },
  {
    year: 2020,
    month: 4,
    content: '4월',
  },
  {
    year: 2020,
    month: 5,
    content: '5월',
  },
  {
    year: 2020,
    month: 6,
    content: '6월',
  },
  {
    year: 2020,
    month: 7,
    content: '7월',
  },
  {
    year: 2020,
    month: 8,
    content: '8월',
  },

  {
    year: 2021,
    month: 1,
    content: '1월',
  },
  {
    year: 2021,
    month: 2,
    content: '2월',
  },
  {
    year: 2021,
    month: 3,
    content: '3월',
  },
];

const CompanyComp = (): JSX.Element => {
  const [year, setYear] = useState(2020);

  const PickYear = (e) => {
    setYear(e.target.value());
  };

  const router = useRouter();
  const { id } = router.query;
  console.log('this is routerQuery!!' + id);

  if (id === 'Info') {
    return (
      <>
        <InfoDiv>
          <ImgSec>
            Delivering an engaging
            <br /> digital experience for kids
          </ImgSec>
          <InfoMiddle>
            비버블록은 4차 산업혁명 시대에 앞장서 전 세계의 어린이들이 자유로운
            온라인 공간에서 창의적이고
            <br /> 융합적인 꿈을 꿀 수 있도록 앱을 연구하고 개발합니다. 자사
            브랜드의 우수한 개발 콘텐츠와 높은 퀄리티의
            <br /> 글로벌 브랜드를 통합하여 최고의 미디어 콘텐츠를 제공함으로써
            <br /> 제대로 된 스팀교육, 차별화된 미디어 놀이공간을 합리적인
            비용으로 서비스합니다.
          </InfoMiddle>
          <InfoSlogan>
            전 세계의 어린이들이 새로운 세상을 만들어 나가는 주역이 될 수 있도록
            <br />
            비버블록은 매일을 노력하는 기업이 되겠습니다.
          </InfoSlogan>
        </InfoDiv>
      </>
    );
  } else if (id === 'History') {
    return (
      <>
        <HistDiv>
          <ButtonUl>
            <ButtonLi onClick={PickYear} value={2020}>
              2020
            </ButtonLi>
            <ButtonLi onClick={PickYear} value={2021}>
              2021
            </ButtonLi>
          </ButtonUl>
          <HistContainer>
            <HistUl>
              {histories.map(
                (hist) =>
                  hist.year === year && (
                    <HistLi key={hist.month}>
                      {hist.month} {hist.content}
                    </HistLi>
                  ),
              )}
            </HistUl>
          </HistContainer>
        </HistDiv>
      </>
    );
  }
  return <></>;
};

const HistContainer = styled.div`
  border: 2px solid greenyellow;
  width: 100%;
  text-align: center;
`;

const HistUl = styled.ul``;

const HistLi = styled.li``;

const ButtonUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  width: 280px;
  height: 70px;
  margin-right: 15px;
  border: 2px solid black;
  font-size: 24px;
`;

const InfoDiv = styled.div`
  width: 100%;
  text-align: center;
  border: 2px solid greenyellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const HistDiv = styled.div`
  width: 100%;
  border: 2px solid greenyellow;
`;

const InfoMiddle = styled.div`
  max-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoSlogan = styled.div`
  max-width: 80vw;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSec = styled.div`
  max-width: 80vw;
  width: 1000px;
  height: 373px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px; ;
`;

export default CompanyComp;
