import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import Select from 'react-select';

interface FormInputs {
  product: { label: string; value: string };
  kidName: string;
  kidBirth: string;
  snsLink: string;
  mobile: string;
  address: string;
  reason: string;
  check: boolean;
}

type Policy = {
  policy: string;
  url: string | null;
  required: boolean;
  value: string;
};

const Request = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'all',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const router = useRouter();

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkItems, setCheckItems] = useState([] as number[]);

  const chkRef = useRef([]);

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
        <FormTitle>체험단 신청</FormTitle>
        <DetailTitle>체험 제품*</DetailTitle>
        <Controller
          name="product"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              id="long-value-select"
              instanceId="long-value-select"
              options={[
                { value: 'babySign', label: '핌핌 베이비싸인 단어 카드' },
                { value: 'babyBeaver', label: '베이비비버 앱' },
                { value: 'babySign', label: '핌핌 베이비싸인 단어카드' },
              ]}
            />
          )}
        />

        <DetailTitle>자녀이름*</DetailTitle>
        <MemberInput
          {...register('kidName', {
            required: '자녀 이름을 입력해주세요.', // JS only: <p>error message</p> TS only support string
          })}
        />

        <DetailTitle>자녀의 생년월일*</DetailTitle>
        <MemberInput
          {...register('kidBirth', {
            required: '필수 입력입니다.', // JS only: <p>error message</p> TS only support string
            minLength: {
              value: 6,
              message: '생년월일 6자로 작성해주세요.', // JS only: <p>error message</p> TS only support string
            },
            maxLength: {
              value: 6,
              message: '생년월일 6자로 작성해주세요.', // JS only: <p>error message</p> TS only support string
            },
          })}
          placeholder="-표시 없이 입력해주세요."
        />
        <span>{errors?.kidBirth?.message}</span>

        <DetailTitle>SNS 링크*</DetailTitle>
        <MemberInput
          {...register('snsLink', {
            required: 'sns를 입력해주세요.', // JS only: <p>error message</p> TS only support string
          })}
          placeholder="본인 소유의 SNS 계정 혹은 블로그 링크"
        />
        <span>{errors?.snsLink?.message}</span>

        <DetailTitle>휴대폰 번호*</DetailTitle>
        <MemberInput
          {...register('mobile', {
            pattern: {
              value: /[0-9]/,
              message: '숫자만 입력 해주세요.', // JS only: <p>error message</p> TS only support string
            },
          })}
        />
        <span>{errors?.mobile?.message}</span>

        <DetailTitle>주소*</DetailTitle>
        <AddressInput {...register('address')} />
        <BtnAddress onClick={() => console.log('주소클릭')} />

        <DetailTitle>신청하신 이유 &#38; 하고 싶은 말</DetailTitle>
        <MemberText {...register('reason')} />

        <FormTitle>개인정보 이용약관</FormTitle>
        <AgreeCheck>{renderPolicies()}</AgreeCheck>

        {renderAgreeAll()}

        <BtnContainer>
          <BtnSubmit type="submit">신청</BtnSubmit>
          <BtnCancel
            onClick={() =>
              router.push('/').then(() => {
                scrollTo(0, 0);
              })
            }
          >
            취소
          </BtnCancel>
        </BtnContainer>
      </InserMemberForm>
    </SignupContainer>
  );
};

export default Request;

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

const BtnContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  margin-top: 50px;
`;

const BtnSubmit = styled.button`
  width: 280px;
  height: 70px;
  border-radius: 100px;
  background-color: ${Color.Main};
  font-size: 27px;
  font-weight: bold;
  color: ${Color.White};
`;

const BtnCancel = styled.button`
  width: 280px;
  height: 70px;
  border-radius: 100px;
  background-color: ${Color.Grayscale400};
  font-size: 27px;
  font-weight: bold;
  color: ${Color.Grayscale600};
`;

const DetailTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const BtnAddress = styled.input`
  background: url('/address_btn.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 118px;
  height: 66px;
  color: transparent;
  text-shadow: 0 0 0 black;
  margin-left: 20px;
`;

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

const MemberText = styled.textarea`
  margin-top: 5px;
  margin-bottom: 100px;
  width: 100%;
  height: 200px;
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

const AddressInput = styled.input`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 456px;
  height: 66px;
  background-color: ${Color.Coupon};
  color: ${Color.Main};
  padding-left: 20px;
  font: normal normal bold 22px/48px Noto Sans Myanmar;
  ::placeholder {
    color: ${Color.Main};
  }
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
