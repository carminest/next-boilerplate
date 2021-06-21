import React, { useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import SimpleSlider from '@src/components/bodyComp/carousel';

const LeftCont = () => {
  const [click, setClick] = useState('none');

  const onDetailClick = () => {
    alert(click);
    setClick('clicked');
  };

  const style = {
    width: '241px',
    height: '228px',
  };

  return (
    <>
      <Cont>
        <Title>비버블록 커리큘럼</Title>
        <Sub>
          누리 과정을 바탕으로 우리 아이에게
          <br />
          알맞는 콘텐츠를 찾아보세요.
        </Sub>
        <SeeDetails onClick={onDetailClick}>자세히보기 &gt;</SeeDetails>
        <CharIcons>
          <img
            style={style}
            src="http://beaverblock.com/images/index/Lua-Icon.png"
          />
        </CharIcons>
      </Cont>
    </>
  );
};

const RightCont = () => {
  const style = {
    width: '241px',
    height: '228px',
  };

  return (
    <>
      <Cont>
        <Title>비버블록 이야기</Title>
        <Sub>
          비버블록의 공식 블로그를
          <br />
          통해 새로운 소식을 만나보세요.
        </Sub>
        <SeeDetails>자세히보기 &gt;</SeeDetails>
        <CharIcons>
          <img
            style={style}
            src="http://beaverblock.com/images/index/Character2.png"
          />
        </CharIcons>
      </Cont>
    </>
  );
};

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

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  width: 100%;
  padding-top: 30px;
`;

const Sub = styled.div`
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  padding-top: 30px;
`;

const SeeDetails = styled.div`
  font-weight: 700;
  font-size: 26px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-position: under;
  padding-top: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const CharIcons = styled.span`
  display: inline-block;
  position: relative;
  bottom: 85px;
  left: 280px;
  width: 250px;
  height: 250px;
`;

const Cont = styled.span`
  display: inline-block;
  width: 560px;
  height: 440px;
  background-color: #f8b8dd;
  padding: 50px 30px;
`;

export default Body;
