import styled from 'styled-components';
import { Button, Container, StandardText, StandardHeading, TextArea, TextBox } from '../Styles/baseStyles';
import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 5px;
  margin: 5px;
  width: 95%;

`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  padding: 5px;
  width: 95%;
`;

interface Props {
  processText: (text: string) => string;
}

export default function FrontPageView(props: Props) {
  const [showResult, setShowResult] = useState(false);
  const [inputBoxText, setInputBoxText] = useState('');
  const [resultText, setResultText] = useState('');

  function speedifyCB() {
    setShowResult(true);
    const sanitizedText = DOMPurify.sanitize(props.processText(inputBoxText));
    setResultText(sanitizedText);
    console.log('speedified');
  }

  function resetCB() {
    setResultText('');
    setInputBoxText('');
    setShowResult(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputBoxText(event.target.value);
  }

  return (
    <Container>
      <OuterBox>
        <StandardText>Insert the text to speedify</StandardText>
        {showResult ? (
            <OuterBox>
            <TextBox dangerouslySetInnerHTML={{ __html: resultText }}></TextBox>
            <Button onClick={resetCB}>Return</Button>
            </OuterBox>
        ) : (
            <OuterBox>
            <TextArea value={inputBoxText} onChange={handleInputChange} maxLength={10000} />
            <Button onClick={speedifyCB}>Speedify</Button>
            </OuterBox>
        )}
      </OuterBox>
    </Container>
  );
}
