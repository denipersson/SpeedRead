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
/*
export default function ContactPage(){

    return(
        <Container>
            <OuterBox>
                <StandardHeading>Contact</StandardHeading>
                <StandardText>
                    For inquiries, fill in the below form:
                </StandardText>
                <TextArea></TextArea>
                <Button>Submit</Button>
            </OuterBox>
            
            
            
        </Container>
    )
}*/
export default function ContactPage(){

    return(
        <Container>
            <OuterBox>
                <StandardHeading>Contact</StandardHeading>
                <StandardText>
                    For inquiries, please e-mail deni.persson@gmail.com.
                </StandardText>
            </OuterBox>
            
            
            
        </Container>
    )
}