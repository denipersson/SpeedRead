import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FrontPage from './Pages/FrontPage';
import NavBarContainer from './Views/NavBarContainer'

import { Container } from './Styles/baseStyles';

const App = () => {
  return (<div>
            
            <BrowserRouter>
            <NavBarContainer></NavBarContainer>
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