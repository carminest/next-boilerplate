import React from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';

type menu = {
  name: string;
  value: number;
  url: string;
  button: boolean;
};

const menus: menu[] = [
  {
    name: 'LOGO',
    value: 1,
    url: '/',
    button: false,
  },
  {
    name: '비버블록',
    value: 2,
    url: '/',
    button: false,
  },
  {
    name: '파트너사',
    value: 3,
    url: '/',
    button: false,
  },
  {
    name: '체험단신청',
    value: 4,
    url: '/',
    button: true,
  },
];

const HeaderRightSide = () => {
  return (
    <>
      <RightHover>
        <span>쿠폰</span> | <span>로그인</span> | <span>회원가입</span>
      </RightHover>
    </>
  );
};

const HeaderLeftSide = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <LeftHead>
        <HeadUl>
          {menus.map((menu) => (
            <HeadLi button key={menu.value}>
              {menu.name}
            </HeadLi>
          ))}
        </HeadUl>
      </LeftHead>
    </>
  );
};

const SubMenu = () => {
  return (
    <>
      <div></div>
    </>
  );
};

const Header = (): JSX.Element => {
  const goUrl = () => {
    return <></>;
  };

  return (
    <Hbody>
      <HeaderContainer>
        <HeaderLeftSide />
        <HeaderRightSide />
      </HeaderContainer>
    </Hbody>
  );
};

const Hbody = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;
const HeaderContainer = styled.div`
  background-color: white;
  width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
  border: 2px solid greenyellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const LeftHead = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  color: #2c2c2c;
  line-height: 48px;
`;

const HeadUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  text-align: center;
`;

const HeadLi = styled.li<{ button: boolean }>`
  margin: 0px;
  padding: 0px;
  display: inline-block;
  width: ${(props) => (props.button ? '150px' : '119px')};
  height: 96px;
  line-height: 96px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
`;

HeadLi.defaultProps = {
  button: false,
};

const RightHover = styled.span`
  font-size: 18px;
  color: gray;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Header;
