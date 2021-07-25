import React, { useState, useEffect, useCallback } from 'react';
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

  const [checkItems, setCheckItems] = useState([] as number[]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  useEffect(() => console.log(checkItems), [checkItems]);

  // 체크박스 단일 개체 선택
  const handleSingleCheck = (idx, isChecked) => {
    isChecked === true
      ? setCheckItems([...checkItems, idx])
      : setCheckItems(checkItems.filter((el) => el !== idx));
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [0, 1, 2];
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  //checkItems 상태가 바뀌면 전체선택button을 다시 렌더 한다.
  //렌더 할 때 checkItems length가 3인 경우 on..

  const renderPolicies = (): JSX.Element => {
    return (
      <>
        {Policies.map((policies, index) => (
          <PolicyContainer key={index}>
            <input
              type="checkbox"
              checked={checkItems.includes(index)}
              value={policies.value}
              {...register('check', { required: policies.required })}
              onChange={(e) => {
                handleSingleCheck(index, e.currentTarget.checked);
              }}
            />
            &nbsp;
            <PolicyText
              onClick={() =>
                policies.url
                  ? router.push(policies.url).then(() => {
                      scrollTo(0, 0);
                    })
                  : ''
              }
            >
              {policies.policy}
            </PolicyText>
            에 동의합니다. ({policies.required === true ? '필수' : '선택'})
          </PolicyContainer>
        ))}
      </>
    );
  };

  const renderAgreeAll = useCallback(() => {
    const isAll = checkItems.length === 3 ? true : false;

    return (
      <AgreeAll>
        <CheckButton
          type="checkbox"
          checked={isAll}
          onChange={(e) => handleAllCheck(e.target.checked)}
        />
        상기 이용약관에 전부 동의합니다.
      </AgreeAll>
    );
  }, [checkItems]);

  return (
    <SignupContainer>
      <InserMemberForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>개인정보 수집·이용 동의</FormTitle>
        <AgreeCheck>{renderPolicies()}</AgreeCheck>

        {renderAgreeAll()}

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
    </SignupContainer>
  );
};

export default Register;

const Policies: Policy[] = [
  {
    policy: '개인정보 수집·이용약관',
    url: '/Policy/Privacy',
    required: true,
    value: 'privacy',
  },
  {
    policy: '이용약관',
    url: '/Policy/Service',
    required: true,
    value: 'service',
  },
  {
    policy: '마케팅용 SMS및 이메일 수신',
    url: null,
    required: false,
    value: 'information',
  },
];

const PolicyText = styled.span`
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

const CheckButton = styled.input`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 10px;
`;

const AgreeAll = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  font-size: 18px;
  font-weight: bold;
  justify-content: flex-end;
`;

const AgreeCheck = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 194px;
  background-color: ${Color.Coupon};
  color: ${Color.Main};
  padding-left: 20px;
  ::placeholder {
    color: ${Color.Main};
  }
`;

const PolicyContainer = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const RegisterButton = styled.input`
  background: url('/joining_btn.svg');
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
  ::placeholder {
    color: ${Color.Main};
  }
`;

const FormTitle = styled.div`
  width: 100%;
  height: 40px;
  font-size: 25px;
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
