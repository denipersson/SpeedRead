import styled from 'styled-components';

// Centered container
export const Container = styled.div`
  display: flex;
  margin:auto;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  height: 90%;
  width:90%;
  padding: 5px;
  overflow-y: auto;
`;

export const TextBox = styled.div`
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  max-height: 100%;
  overflow-y: auto;
  margin: 5px;

`;



export const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  width: 80%;
  outline: none;
  resize: vertical;
  min-height: 100px;
  max-height: 1000px;
  overflow-y: auto;
  max-length: 10000;

  &:focus {
    border-color: #4CAF50;
  }
`;






// Heading with custom font
export const StandardHeading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  text-align: center;
`;
export const StandardText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  margin:15px;
`;

// Button with custom styles
export const Button = styled.button`
  background-color: #76b5c5;
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px;

  &:hover {
    background-color: #2596be;
  }
`;
