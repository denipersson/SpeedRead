import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FrontPage from './Pages/FrontPage';
import NavBarContainer from './Views/NavBarContainer'
import styled from 'styled-components';
import { Container } from './Styles/baseStyles';

const BlankSpace = styled.div`
height:30px;
margin-top: 30px; /* or the height of your navbar */
padding-top: 20px; /* optional, to add some space between the navbar and content */
`

const App = () => {
  return (<div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9146672353679306"
            crossOrigin="anonymous"></script>
            <BrowserRouter>
            <NavBarContainer></NavBarContainer>
            <BlankSpace></BlankSpace>
            <Container>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                
                <p>SpeedRead (c) 2023 Deni Persson</p>
              </Container>
            </BrowserRouter>
        </div>
  );
};

const Home = () => {
  return <FrontPage></FrontPage>;
};

const About = () => {
  return <AboutPage></AboutPage>
};
const Contact = () => {
  return <ContactPage></ContactPage>
};

export default App;