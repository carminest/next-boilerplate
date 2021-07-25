import React, { useState, useCallback } from 'react';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

//사용은 못했으나 혹시 몰라 분리해놓았습니다.
//useForm api 사용때문에 사용에 조금 제한이 있습니다.

type Policy = {
  policy: string;
  url: string | null;
  required: boolean;
  value: string;
};

interface FormInputs {
  email: string;
  password: string;
  passwordChk: string;
  check: boolean;
}

const PolicyCheckBox = (): JSX.Element => {
  const { register } = useForm<FormInputs>();
  const router = useRouter();
  const [checkItems, setCheckItems] = useState([] as number[]);

  const isAll = checkItems.length === 3 ? true : false;

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

  const renderAgreeAll = useCallback(() => {
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

  return (
    <React.Fragment>
      <AgreeCheck>{renderPolicies()}</AgreeCheck>
      {renderAgreeAll()}
    </React.Fragment>
  );
};

export default PolicyCheckBox;

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
