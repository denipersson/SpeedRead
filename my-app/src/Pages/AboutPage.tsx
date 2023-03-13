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

`;

export default function AboutPage(){

    return(
        <Container>
            <OuterBox>
                <StandardHeading>About SpeedRead</StandardHeading>
                <StandardText>
                    SpeedRead is an app designed to help make reading simpler.
                    Based on a new bionic reading method, by boldening the first part of each word in a text, it helps makes the text more readable. 
                    The human brain will recognise the familiar words and complete them without having to finish reading it.
                    This can increase your reading speed significantly, as well as your productivity, while also decreasing brain-fog.
                    It can be especially useful for those suffering from neurodevelopmental disorders such as ADHD, as well as some cases of dyslexia.
                </StandardText>
            </OuterBox>
            
            
            
        </Container>
    )
}