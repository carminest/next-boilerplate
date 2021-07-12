import React, { useState } from 'react';
import refund from '@src/commons/policy/refund.json';
import styled from '@src/commons/style/themes/styled';

const Refund = (): JSX.Element => {
  const [lang, setLang] = useState('korean');
  const policyLang = refund.korean;

  return (
    <Policy>
      <PolicyContainer>
        <PolicyHeader>환불정책</PolicyHeader>
        {policyLang.text.map((item, index) => (
          <React.Fragment key={index}>
            <TextTitle>{item.title}</TextTitle>
            <TextContent>{item.content}</TextContent>
          </React.Fragment>
        ))}
      </PolicyContainer>
    </Policy>
  );
};

export default Refund;

const TextTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
`;

const TextContent = styled.div`
  font: normal normal 300 18px/30px Noto Sans Myanmar;
`;

const LangButton = styled.button``;

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
