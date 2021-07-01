import React, { EventHandler, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@src/commons/style/themes/styled';
import { NavSub, NavMain, NavSec } from '@src/components/bodyComp/nav';
import Color from '@src/commons/style/themes/colors';

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

  const PickYear = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      setYear((prev) => Number(target.getAttribute('value')));
    },
    [year],
  );

  useEffect(() => {
    console.log('year changed to : ' + year);
  });

  return (
    <>
      <NavSec>
        <NavMain>회사 연혁</NavMain>
        <NavSub>HOME &gt; 비버블록 &gt; 회사소개</NavSub>
      </NavSec>
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
};

const HistContainer = styled.div`
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
  justify-content: center;
  float: left;
  width: 280px;
  height: 70px;
  margin-right: 30px;
  border: 2px solid ${Color.Main};
  font-family: 'Noto Sans Kannada';
  font-weight: 700;
  font-size: 25px;
  color: ${Color.Main};
  line-height: 75px;
  &:hover {
    background-color: ${Color.Main};
    color: ${Color.White};
    cursor: pointer;
  }
`;

const HistDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-top: 96px;
  padding-left: 22vw;
  padding-right: 22vw;
`;

export default CompanyComp;
