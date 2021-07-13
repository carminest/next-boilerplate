import React, { useState } from 'react';
import serviceKor from '@public/policy_json/service_kor.json';
import serviceEng from '@public/policy_json/service_eng.json';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

const Refund = (): JSX.Element => {
  const [lang, setLang] = useState('korean');
  const [isSelected, setIsSelected] = useState(true);
  const policy = lang === 'korean' ? serviceKor : serviceEng;

  return (
    <Policy>
      <PolicyContainer>
        <PolicyHeader>이용약관 (Terms of service)</PolicyHeader>
        {Languages.map((languages) => (
          <LangButton
            onClick={() => setLang((prev) => languages.value)}
            current={lang === languages.value}
            key={languages.value}
          >
            {languages.language}
          </LangButton>
        ))}
        <MainTitle>{policy.mainTitle}</MainTitle>
        <MainContent>{policy.mainInfo}</MainContent>
        {policy.text.map((item, index) => (
          <React.Fragment key={index}>
            <TextTitle key={index}>{item.title}</TextTitle>
            <TextContent>{item.content}</TextContent>
          </React.Fragment>
        ))}
      </PolicyContainer>
    </Policy>
  );
};

export default Refund;

const Languages = [
  { language: '한국어', value: 'korean' },
  { language: 'English', value: 'english' },
];

const TextTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
`;

const TextContent = styled.div`
  font: normal normal 300 18px/30px Noto Sans Myanmar;
`;

const LangButton = styled.span<{ current: boolean }>`
  width: 176px;
  height: 46px;
  display: inline-block;
  cursor: pointer;
  background-color: ${(props) =>
    props.current === true ? Color.Main : Color.White};
  color: ${(props) => (props.current === true ? Color.White : Color.Main)};
  border-radius: 100px 100px 100px 100px;
  text-align: center;
  line-height: 46px;
  font-weight: bold;
  font-size: 25px;
  margin-right: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const PolicyHeader = styled.div`
  font: normal normal bold 25px/33px Noto Sans Kannada;
  line-height: 50px;
  border-bottom: 1px solid black;
`;

const PolicyContainer = styled.div`
  margin-top: 200px;
  margin-bottom: 362px;
  width: 1206px;
`;

const Policy = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const MainContent = styled.div`
  font-weight: bold;
  line-height: 25px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
