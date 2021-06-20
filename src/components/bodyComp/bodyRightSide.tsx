import React from 'react';
import styled from '@src/commons/style/themes/styled';

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

const CharIcons = styled.span`
  display: inline-block;
  position: relative;
  bottom: 85px;
  left: 280px;
  width: 250px;
  height: 250px;
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
  background-color: #fcbf87;
  padding: 50px 30px;
`;

export default RightCont;
