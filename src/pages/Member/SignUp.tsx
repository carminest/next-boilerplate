import React, { useState } from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm, SubmitHandler } from 'react-hook-form';

const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [isToggle, setIsToggle] = useState(false);

  const toggleButton = () => {
    setIsToggle(!isToggle);

    //클릭할 때 함수 실행
    //함수 실행시 다른 이미지로 src 변경
    //버튼이미지 url 변경
  };

  interface FormInputs {
    email: string;
    password: string;
    passwordChk: string;
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

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
          {...register('email', { required: true })}
          {...(errors.email && '이메일은 필수 입력 항목입니다.')}
          type="email"
          placeholder="이메일*"
        ></MemberInput>
        <MemberInput
          {...register('password', { required: true })}
          {...(errors.password && '비밀번호를 입력해주세요')}
          type="password"
          placeholder="비밀번호*"
        ></MemberInput>
        <MemberInput
          {...register('passwordChk', { required: true })}
          {...(errors.passwordChk && '비밀번호 확인 항목을 입력해주세요')}
          type="password"
          placeholder="비밀번호 확인*"
        ></MemberInput>
        <ButtonContainer>
          <RegisterButton value={''} type={'submit'} />
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

const RegisterButton = styled.input`
  background: url('/joining_but.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  min-width: 347px;
  min-height: 70px;
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
