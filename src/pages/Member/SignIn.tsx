import React from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface FormInputs {
  email: string;
  password: string;
  passwordChk: string;
  check: boolean;
}

type Policy = {
  policy: string;
  url: string | null;
  required: boolean;
  value: string;
};

const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <SignupContainer>
      <InserMemberForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>로그인</FormTitle>
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
        <ButtonContainer>
          <RegisterButton value={''} type={'submit'} />
        </ButtonContainer>
        <ButtonContainer>
          <MemberButton
            onClick={() =>
              router.push('../Member/SignUp').then(() => {
                scrollTo(0, 0);
              })
            }
          >
            회원가입
          </MemberButton>
          | <MemberButton>비밀번호 찾기</MemberButton>
        </ButtonContainer>
      </InserMemberForm>
    </SignupContainer>
  );
};

export default Register;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const MemberButton = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 130px;
  font-size: 18px;
`;

const RegisterButton = styled.input`
  background: url('/login_btn.svg');
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
  font-size: 22px;
  font-weight: bold;
  ::placeholder {
    color: ${Color.Main};
  }
`;

const FormTitle = styled.div`
  width: 100%;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  color: ${Color.Main};
  text-align: left;
  border-bottom: 4px solid ${Color.Main};
  margin-bottom: 15px;
`;

const SignupContainer = styled.div`
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
