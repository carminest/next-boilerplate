import React from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  originalPassword: string;
  newPassword: string;
  checkNewPassword: string;
}

const MyPage = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'all',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <SignupContainer>
      <InserMemberForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>마이 페이지</FormTitle>
        <DetailTitle>내 상품</DetailTitle>
        <MyItem />
        <DetailTitle>구매내역</DetailTitle>
        <MyItem />
        <FormTitle>비밀번호 변경</FormTitle>
        <MemberInput
          {...register('originalPassword')}
          placeholder="기존 비밀번호"
        />
        <MemberInput {...register('newPassword')} placeholder="변경 비밀번호" />
        <Warning>영문, 숫자 포함 (8자 이상)</Warning>
        <MemberInput
          {...register('checkNewPassword')}
          placeholder="비밀번호 확인"
        />
        <BtnContainer>
          <BtnSubmit type="submit">비밀번호 변경</BtnSubmit>
        </BtnContainer>
      </InserMemberForm>
    </SignupContainer>
  );
};

export default MyPage;

const Warning = styled.div`
  color: ${Color.Error500};
  height: 40px;
  width: 100%;
  line-height: 2;
  font-size: 18px;
  font-weight: 600;
`;

const BtnContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 50px;
`;

const BtnSubmit = styled.button`
  width: 347px;
  height: 70px;
  border-radius: 100px;
  background-color: ${Color.Main};
  font-size: 27px;
  font-weight: bold;
  color: ${Color.White};
`;

const DetailTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
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

const MyItem = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
  width: 100%;
  height: 300px;
  background-color: ${Color.Coupon};
  color: ${Color.Main};
  padding-left: 20px;
  font: normal normal bold 22px/48px Noto Sans Myanmar;
  ::placeholder {
    color: ${Color.Main};
  }
  border: none;
  resize: none;
`;

const FormTitle = styled.div`
  height: 40px;
  font: normal normal bold 25px/35px Noto Sans Kannada;
  color: ${Color.Main};
  border-bottom: 4px solid ${Color.Main};
  margin-bottom: 15px;
`;

const SignupContainer = styled.div`
  max-width: 1920px;
  min-width: 1080px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const InserMemberForm = styled.form`
  margin-top: 190px;
  width: 596px;
`;
