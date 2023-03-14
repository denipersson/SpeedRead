import styled from 'styled-components';
import { Button, Container, StandardText, StandardHeading, TextArea, TextBox } from '../Styles/baseStyles';
import React, { useState } from 'react';
import StyledImageUpload from '../Presenters/imageUpload';
import LoadingSpinner from '../Styles/loadingSpinner';
import {Ad} from './Ad';

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self:center;
  padding: 5px;
  margin: 5px;
  width: 95%;
  overflow-y: auto;

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
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
      {<Ad/>}

    </Container>
  );
}
/*
  async function convertImageToDataUrl(imageFile: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          resolve(event.target.result);
        } else {
          reject(new Error('Failed to convert image to data URL'));
        }
      };
      reader.readAsDataURL(imageFile);
    });
  }*/
