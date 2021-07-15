import React, { useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm } from 'react-hook-form';

type CouponPolicy = {
  policy: string;
};

const Register = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [isToggle, setIsToggle] = useState(false);

  const toggleButton = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);

    //클릭할 때 함수 실행
    //함수 실행시 다른 이미지로 src 변경
    //버튼이미지 url 변경
  };

  const memberSubmit = (e: Event) => {
    //회원가입 submit 버튼
    e.preventDefault();
  };

  return (
    <CouponBody>
      <InserMemberForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>개인정보 수집·이용 동의</FormTitle>
        <AgreeCheckBox></AgreeCheckBox>
        <AgreeAll>
          <CheckButton
            src={isToggle === true ? '/check_but_on.svg' : '/check_but_off.svg'}
            onClick={toggleButton}
          />
          상기 이용약관에 전부 동의합니다.
        </AgreeAll>

        <FormTitle>회원 정보</FormTitle>
        <MemberInput
          {...register('Email', { required: true })}
          type="email"
          placeholder="이메일*"
        ></MemberInput>
        <MemberInput
          {...register('password', { required: true })}
          type="password"
          placeholder="비밀번호*"
        ></MemberInput>
        <MemberInput
          {...register('passwordChk', { required: true })}
          type="password"
          placeholder="비밀번호 확인*"
        ></MemberInput>
        <ButtonContainer>
          <RegisterButton
            onClick={() => memberSubmit}
            src={'/joining_but.svg'}
          />
        </ButtonContainer>
      </InserMemberForm>
    </CouponBody>
  );
};

export default Register;

const CheckButton = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const AgreeAll = styled.div`
  width: 100%;
  height: 35px;
  text-align: right;
  font: normal normal bold 18px/25px Noto Sans Kannada;
`;

const AgreeCheckBox = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 194px;
  background-color: ${Color.Coupon};
  color: ${Color.Main};
  padding-left: 20px;
  font: normal normal bold 22px/48px Noto Sans Myanmar;
  ::placeholder {
    color: ${Color.Main};
  }
`;

const CouponPolicyContainer = styled.div`
  width: 100%;
  height: 24px;
  font: normal normal normal 15px/20px Noto Sans Kannada;
  color: ${Color.Gray};
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

const MemberInput = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
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

const FormTitle = styled.div`
  width: 100%;
  height: 40px;
  font: normal normal bold 25px/35px Noto Sans Kannada;
  color: ${Color.Main};
  text-align: left;
  border-bottom: 4px solid ${Color.Main};
  margin-bottom: 15px;
`;

const CouponBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const InserMemberForm = styled.form`
  margin-top: 190px;
  width: 596px;
  height: 1000px;
`;
