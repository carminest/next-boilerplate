import React from 'react';
import styled from '@src/commons/style/themes/styled';
import { useRouter } from 'next/router';
import Color from '@src/commons/style/themes/colors';

type CouponPolicy = {
  policy: string;
};

const Register = () => {
  const router = useRouter();
  const renderCouponPolicies = (): JSX.Element => {
    return (
      <>
        {CouponPolicies.map((couponPolicy, index) => (
          <CouponPolicyContainer key={index}>
            - {couponPolicy.policy}
          </CouponPolicyContainer>
        ))}
      </>
    );
  };

  return (
    <CouponContent>
      <CouponContainer>
        <CouponTitle>쿠폰등록</CouponTitle>
        <UseCoupon>이용권을 등록하고 베이비비버 어플을 이용해보세요.</UseCoupon>
        <EnterCoupon placeholder="이용권 코드를 정확히 입력해주세요"></EnterCoupon>
        <ButtonContainer>
          <RegisterButton src={'/coupon_btn.svg'} />
          <MemberButton
            onClick={() =>
              router.push('../Member/SignUp').then(() => {
                scrollTo(0, 0);
              })
            }
          >
            회원가입
          </MemberButton>{' '}
          | <MemberButton>로그인</MemberButton>
        </ButtonContainer>
        {renderCouponPolicies()}
      </CouponContainer>
    </CouponContent>
  );
};

export default Register;

const CouponPolicyContainer = styled.div`
  width: 100%;
  height: 24px;
  font: normal normal normal 15px/20px Noto Sans Kannada;
  color: ${Color.Gray100};
`;

const CouponPolicies: CouponPolicy[] = [
  { policy: '이용권은 등록과 동시에 사용 가능합니다.' },
  { policy: '한 번 등록된 이용권은 취소 및 재사용이 불가능합니다.' },
  {
    policy:
      '이용권 사용 중 환불을 원하시는 경우에는 help@beaverblock.com으로 문의해주세요.',
  },
];

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const MemberButton = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 80px;
  font: normal normal normal 18px/25px Noto Sans Kannada;
`;

const RegisterButton = styled.img`
  cursor: pointer;
  width: 100%;
  height: 70px;
  object-fit: contain;
  display: block;
  margin-bottom: 30px;
  margin-top: 60px;
`;

const EnterCoupon = styled.input`
  width: 100%;
  height: 66px;
  background-color: ${Color.Coupon};
  color: ${Color.Main};
  padding-left: 20px;
  font: normal normal bold 22px/48px Noto Sans Myanmar;
  ::placeholder {
    color: ${Color.Main};
  }
`;

const UseCoupon = styled.div`
  width: 100%;

  font: normal normal normal 18px/80px Noto Sans Kannada;
  letter-spacing: 0px;
`;

const CouponTitle = styled.div`
  width: 100%;
  height: 40px;
  font: normal normal bold 25px/35px Noto Sans Kannada;
  color: ${Color.Main};
  text-align: left;
  border-bottom: 4px solid ${Color.Main};
`;

const CouponContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const CouponContainer = styled.div`
  margin-top: 190px;
  width: 596px;
  height: 500px;
`;
