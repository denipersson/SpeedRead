import { Button, Container, StandardText, StandardHeading, TextArea, TextBox } from '../Styles/baseStyles'; 
import styled from 'styled-components';
const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self:center;
  padding: 5px;
  margin: 5px;
  width: 95%;
  max-height: 80vh;
  overflow-y: auto;

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;


export default function AboutPage(){

    return(
        <Container>
            <OuterBox>
                <StandardHeading>About SpeedRead</StandardHeading>
                <StandardText>
                    SpeedRead is an app designed to help make reading simpler.
                    Based on a new bionic reading method, by <b>bolde</b>ning <b>th</b>e <b>fir</b>st <b>pa</b>rt of <b>ea</b>ch <b>wo</b>rd <b>i</b>n <b>a</b> <b>te</b>xt, <b>i</b>t <b>hel</b>ps <b>ma</b>ke <b>th</b>e <b>te</b>xt <b>mo</b>re <b>read</b>able. 
                    The human brain will recognise the familiar words and complete them without having to finish reading it.
                    This can increase your reading speed significantly, as well as your productivity, while also decreasing brain-fog.
                    It can be especially useful for those suffering from neurodevelopmental disorders such as ADHD, as well as some cases of dyslexia.
                </StandardText>
            </OuterBox>
            
            
            
        </Container>
    )
}