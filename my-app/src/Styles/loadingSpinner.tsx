import styled from "styled-components";
import { Container } from "./baseStyles";
import spinner from "../spinner.svg"

const Box = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:10px;
`

const Image = styled.img`
    width:50px;
    height:50px;
`

export default function LoadingSpinner(){
    return  <Box>
                <Image src={spinner}></Image>
            </Box>

}