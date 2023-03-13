import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FrontPage from './Pages/FrontPage';
import NavBarContainer from './Views/NavBarContainer'

const App = () => {
  return (<div>
            
            <BrowserRouter>
            <NavBarContainer></NavBarContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
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