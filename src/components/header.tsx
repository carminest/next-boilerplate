import React, { useCallback, useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';
import Color from '@src/commons/style/themes/colors';

enum RouterType {
  Dynamic = 'DYNAMIC',
  Static = 'STATIC',
}

type menu = {
  name: string;
  value: number;
  url: string;
  originUrl?: string;
  type?: RouterType;
  sub?: menu[];
};

const menus: menu[] = [
  {
    name: '비버블록',
    value: 2,
    url: '/Company/Info',
    sub: [
      {
        value: 1,
        name: '회사소개',
        url: '/Company/Info',
      },
      {
        value: 2,
        name: '연혁',
        url: '/Company/History',
      },
    ],
  },
  {
    name: '제품',
    value: 3,
    originUrl: '/Product/[product]',
    url: '/Product/BabyBeaver',
    sub: [
      {
        value: 1,
        name: '베이비비버',
        originUrl: '/Product/[product]',
        url: '/Product/BabyBeaver',
        type: RouterType.Dynamic,
      },
      {
        value: 2,
        name: '핌핌베이비싸인',
        originUrl: '/Product/[product]',
        url: '/Product/BabySign',
        type: RouterType.Dynamic,
      },
    ],
  },
  {
    name: '파트너사',
    value: 4,
    url: '/Partners/AppleBee',
    originUrl: '/Partners/[partner]',
    sub: [
      {
        value: 0,
        name: '애플비',
        url: '/Partners/AppleBee',
        originUrl: '/Partners/[partner]',
        type: RouterType.Dynamic,
      },
      {
        value: 1,
        name: '핑고',
        url: '/Partners/Pingo',
        originUrl: '/Partners/[partner]',
        type: RouterType.Dynamic,
      },
      {
        value: 2,
        name: '로이 비쥬얼',
        url: '/Partners/RoiVisual',
        originUrl: '/Partners/[partner]',
        type: RouterType.Dynamic,
      },
    ],
  },
  {
    name: '체험단신청',
    value: 5,
    url: '/',
    sub: [],
  },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(0);

  const offHover = () => {
    setSelectedMenu(0);
  };

  const renderHeaderRightSide = () => {
    return (
      <LoginMenuContainer>
        {LoginMenus.map((loginMenu) => (
          <RightHover
            key={loginMenu.value}
            onClick={() => router.push(loginMenu.url)}
          >
            {loginMenu.name}
          </RightHover>
        ))}
      </LoginMenuContainer>
    );
  };

  const renderHeaderLeftSide = (): JSX.Element => {
    return (
      <HeadUl>
        <LogoImg
          alt={''}
          src={'/logo.svg'}
          onClick={() => {
            router.push('/').then(() => {
              scrollTo(0, 0);
            });
          }}
        />
        {menus.map((menu) => (
          <MenuLi
            key={menu.value}
            onMouseOver={() => {
              setSelectedMenu(menu.value);
            }}
          >
            <MainMenu
              onClick={() => {
                if (menu.type === RouterType.Dynamic && menu.originUrl) {
                  router.push(menu.originUrl, menu.url).then(() => {
                    scrollTo(0, 0);
                  });
                } else {
                  router.push(menu.url).then(() => {
                    scrollTo(0, 0);
                  });
                }
              }}
            >
              {menu.name}
            </MainMenu>
            <SubMenu show={menu.value === selectedMenu} onMouseLeave={offHover}>
              {menu.sub?.map((subMenu) => (
                <SubMenuBtn
                  key={subMenu.value}
                  onClick={() => {
                    if (
                      subMenu.type === RouterType.Dynamic &&
                      subMenu.originUrl
                    ) {
                      router.push(subMenu.originUrl, subMenu.url).then(() => {
                        scrollTo(0, 0);
                      });
                    } else {
                      router.push(subMenu.url).then(() => {
                        scrollTo(0, 0);
                      });
                    }
                  }}
                >
                  {subMenu.name}
                </SubMenuBtn>
              ))}
            </SubMenu>
          </MenuLi>
        ))}
      </HeadUl>
    );
  };

  return (
    <HeaderWrap>
      <Hbody>
        <HeaderContainer>
          {renderHeaderLeftSide()}
          {renderHeaderRightSide()}
        </HeaderContainer>
        <SubMenuContainer
          onMouseLeave={offHover}
          hasSubMenus={
            (menus?.find((menu) => menu?.value === selectedMenu)?.sub?.length ??
              0) > 0
          }
        />
      </Hbody>
    </HeaderWrap>
  );
};

const LoginMenus: menu[] = [
  { name: '쿠폰 ㅣ ', url: '/Coupon/Register', value: 1 },
  { name: '로그인 ㅣ ', url: '', value: 2 },
  { name: '회원가입', url: '', value: 3 },
];

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background-color: ${Color.White};
  top: 0;
`;

const LoginMenuContainer = styled.div`
  min-width: 200px;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: ${Color.White};
  z-index: 11;
`;

const SubMenuContainer = styled.div<{ hasSubMenus: boolean }>`
  background-color: ${Color.White};
  width: 100%;
  height: 60px;
  display: ${(props) => (props.hasSubMenus ? 'display' : 'none')};
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-top: 3px solid #ebebeb;
`;

const Hbody = styled.div`
  max-width: 1920px;
  min-width: 1080px;
  background-color: ${Color.White};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Color.White};
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

const HeadUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuLi = styled.li`
  position: relative;
  width: 120px;
  height: 96px;
  z-index: 9;
  background-color: ${Color.White};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    border-bottom: solid 3px ${Color.Main};
  }
`;

const MainMenu = styled.div`
  font-size: 20px;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${Color.White};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubMenu = styled.div<{ show: boolean }>`
  position: absolute;
  top: ${(props) => (props.show ? 96 : 0)}px;
  transition: 0.4s;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
`;

const SubMenuBtn = styled.button`
  width: 120px;
  &:hover {
    color: ${Color.Main};
    font-weight: bold;
  }
`;

const RightHover = styled.span`
  font-size: 18px;
  color: gray;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  cursor: pointer;
  margin-right: 60px;
`;

export default Header;
