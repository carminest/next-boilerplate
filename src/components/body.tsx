import React from 'react';
import styled from '@src/commons/style/themes/styled';
import SimpleSlider from '@src/components/bodyComp/carousel';
import LeftCont from '@src/components/bodyComp/bodyLeftSide';
import RightCont from '@src/components/bodyComp/bodyRightSide';

const Body = (): JSX.Element => {
  return (
    <>
      <SimpleSlider />
      <BodyFirstSec />
      <BodySecondSec>
        <LeftCont />
        <RightCont />
      </BodySecondSec>
    </>
  );
};

const BodyFirstSec = styled.div`
  height: 630px;
  width: 100%;
`;
const BodySecondSec = styled.div`
  height: 630px;
  width: 100%;
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7d8;
`;

export default Body;
