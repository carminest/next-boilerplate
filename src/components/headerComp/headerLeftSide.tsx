import React, { useState } from 'react';
import styled from '@src/commons/style/themes/styled';

const HeaderLeftSide = (): JSX.Element => {
  const logoStyle = {
    width: '210px',
    fontWeight: 800,
  };

  const expLi = {
    width: '150px',
  };
  return (
    <>
      <span className="leftHead">
        <ul>
          <li style={logoStyle}>LOGO</li>
          <li>비버블록</li>
          <li>제품</li>
          <li>파트너사</li>
          <li style={expLi}>
            <ExpButton>체험단 신청</ExpButton>
          </li>
        </ul>
      </span>
    </>
  );
};

const ExpButton = styled.span`
  border: 1px solid #ff6059;
  height: 50px;
  border-radius: 50px;
  line-height: 40px;
  color: #ff6059;
  padding: 6px 20px;
  font-weight: 600;
  align-self: default;
  &:hover {
    color: white;
    background-color: #ff6059;
    cursor: pointer;
  }
`;

export default HeaderLeftSide;
