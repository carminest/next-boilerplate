import React, { useCallback, useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';
import Color from '@src/commons/style/themes/colors';

type menu = {
  name: string;
  value: number;
  url: string;
  button: boolean;
  sub: sub[];
};

type sub = {
  value: number;
  name: string;
  url: string;
};

const menus: menu[] = [
  {
    name: '비버블록',
    value: 2,
    url: '/',
    button: false,
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
    url: '/',
    button: false,
    sub: [
      {
        value: 1,
        name: '베이비비버',
        url: '/Product/BabyBeaver',
      },
      {
        value: 2,
        name: '핌핌베이비싸인',
        url: '/Product/BabySign',
      },
    ],
  },
  {
    name: '파트너사',
    value: 4,
    url: '/',
    button: false,
    sub: [
      {
        value: 1,
        name: '애플비',
        url: '/Partners/AppleBee',
      },
      {
        value: 2,
        name: '핑고엔터테인먼트',
        url: '/Partners/Pingo',
      },
      {
        value: 3,
        name: '로이비쥬얼',
        url: '/Partners/RoiVisual',
      },
    ],
  },
  {
    name: '체험단신청',
    value: 5,
    url: '/',
    button: true,
    sub: [],
  },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(null);

  const onHover = (e) => {
    const { value } = e.target;
    setSelectedMenu(value);
  };

  const offHover = () => {
    setSelectedMenu(null);
  };

  const renderSubMenuList = useCallback((): JSX.Element => {
    return (
      <SubMenuContainer show={!!selectedMenu}>
        {menus
          ?.find((menu) => menu.value === selectedMenu)
          ?.sub?.map((s) => (
            <div key={s.value}>
              <button
                onClick={() =>
                  router.push(s.url).then(() => {
                    scrollTo(0, 0);
                  })
                }
              >
                {s.name}
              </button>
            </div>
          ))}
      </SubMenuContainer>
    );
  }, [selectedMenu]);

  const renderHeaderRightSide = () => {
    return (
      <RightHover>
        <span>쿠폰</span> | <span>로그인</span> | <span>회원가입</span>
      </RightHover>
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
          <HeadLi
            button
            key={menu.value}
            value={menu.value}
            onClick={() => router.push(menu.url)}
            onMouseOver={onHover}
          >
            {menu.name}
          </HeadLi>
        ))}
      </HeadUl>
    );
  };

  return (
    <Hbody>
      <HeaderContainer>
        {renderHeaderLeftSide()}
        {renderHeaderRightSide()}
      </HeaderContainer>
      <SubMenu
        onMouseLeave={offHover}
        hasSubMenus={
          (menus?.find((menu) => menu?.value === selectedMenu)?.sub?.length ??
            0) > 0
        }
      >
        {renderSubMenuList()}
      </SubMenu>
    </Hbody>
  );
};

const SubMenu = styled.div<{ hasSubMenus: boolean }>`
  background-color: ${Color.White};
  width: 100%;
  padding: 0 120px;
  height: 60px;
  display: ${(props) => (props.hasSubMenus ? 'display' : 'none')};
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Hbody = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const HeaderContainer = styled.div`
  background-color: white;
  width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
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
  text-align: center;
  display: flex;
  align-items: center;
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

const LogoImg = styled.img`
  cursor: pointer;
`;

const SubMenuContainer = styled.div<{ show: boolean }>`
  position: absolute;
  top: ${(props) => (props.show ? 0 : -96)}px;
  transition: 0.4s;
`;

export default Header;
