import React from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

export const NavSub = styled.span`
  margin-bottom: 15px;
  font-size: 15px;
  width: 190px;
`;

export const NavMain = styled.span`
  font-family: 'NotoSans Kannada-Regular';
  font-weight: 700;
  font-size: 25px;
  color: ${Color.Main};
  margin-bottom: 10px;
  display: inline-block;
  width: 100px;
`;

export const NavSec = styled.div`
  width: 1206px;
  height: 100px;
  border-bottom: 3px solid ${Color.Main};
  color: ${Color.Main};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 38px;
  margin-bottom: 20px;
`;
