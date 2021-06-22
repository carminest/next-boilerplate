import React, { useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import SimpleSlider from '@src/components/bodyComp/carousel';

const LeftCont = () => {
  const [click, setClick] = useState('none');

  const onDetailClick = () => {
    alert(click);
    setClick('clicked');
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

        <CharImg side="left" />
      </Cont>
    </>
  );
};

const RightCont = () => {
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

        <CharImg side="right" />
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

const left = 'http://beaverblock.com/images/index/Lua-Icon.png';
const right = 'http://beaverblock.com/images/index/Character2.png';

const CharImg = styled.div<{ side: string }>`
  background-image: url(${(props) => (props.side === 'left' ? left : right)});
  background-size: contain;
  display: inline-block;
  position: relative;
  bottom: 85px;
  left: 280px;
  width: 250px;
  height: 230px;
  /* width height 고정값 및 포지션 관련 같이 봐주셨으면 좋겠습니다.
  또한 width height 변수로 사용하는 예시도 궁금합니다. */
`;

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

const Cont = styled.span`
  display: inline-block;
  width: 560px;
  height: 440px;
  background-color: #f8b8dd;
  padding: 50px 30px;
`;

export default Body;
