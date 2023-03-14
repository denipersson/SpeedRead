import styled from 'styled-components';
import { Button, Container, StandardText, StandardHeading, TextArea, TextBox } from '../Styles/baseStyles';
import React, { useState } from 'react';
import StyledImageUpload from '../Presenters/imageUpload';
import LoadingSpinner from '../Styles/loadingSpinner';
import {Adsense} from '@ctrl/react-adsense';



const BlankSpace = styled.div`
height:30px;
`

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self:center;
  padding: 5px;
  margin: 5px;
  max-height: 100%;
  overflow-y: auto;
  /* Add the following style: */
  width: 100%;
`;


interface Props {
  processText: (text: string) => string;
  extractImageText: (text: string) => Promise<string>;
}
export default function FrontPageView(props: Props) {
  const [showResult, setShowResult] = useState(false);
  const [inputBoxText, setInputBoxText] = useState('');
  const [resultText, setResultText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  function handleImageUpload(image: File) {
    setLoading(true);
    props
      .extractImageText(URL.createObjectURL(image))
      .then((result) => {
        setResultText(result);
        setShowResult(true);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function speedifyCB() {
    setShowResult(true);
    const result = props.processText(inputBoxText);
    setResultText(result);
  }

  function resetCB() {
    setResultText('');
    setInputBoxText('');
    setShowResult(false);
    setImageFile(null);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputBoxText(event.target.value);
  }

  return (
    <Container>
      <OuterBox>
        {showResult ? (
          <OuterBox>
            <TextBox dangerouslySetInnerHTML={{ __html: resultText }}></TextBox>
            <Button onClick={resetCB}>Return</Button>
          </OuterBox>
        ) : (
          <OuterBox>
            <StandardText>Insert text manually, or upload an image!</StandardText>
            <StyledImageUpload onImageUpload={handleImageUpload} />
            <TextArea value={inputBoxText} onChange={handleInputChange} maxLength={10000} />
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Button onClick={speedifyCB}>Speedify</Button>
            )}
            <p>Important: iPhone LIVE photos will not work, disable it before uploading.</p>
          </OuterBox>
        )}
      </OuterBox>
      <Adsense
        client="ca-pub-9146672353679306" // Replace with your Google AdSense publisher ID
        slot="8165977004"
        style={{ width: 400, height: 200 }}
        format=""
        responsive='true'
        
      />


    </Container>
  );
}
