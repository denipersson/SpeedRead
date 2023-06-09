import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png'

const NavbarContainer = styled.div`
  position: fixed;
  top: 0; /* keep at the top of the page */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25px;
  padding: 10px;
  background-color: #eee;
  border: 1px solid #B9bbbb;
`;

const Logo = styled.img`
width:100%;
height:100%;
`;
const LogoHolder = styled.div`
width: 50px;
height: 50px;
position: absolute;
left: 10px;
top: -5px;

`

const NavbarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
`;

const Frame = styled.div`
height:60px;
width:1px;
`
const Navbar = () => {
  return (<Frame>
            <NavbarContainer>
                <LogoHolder>
              <Logo src={logo} alt="Logo" />
              </LogoHolder>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
            </NavbarContainer>
          </Frame>
         
  );
};

export default Navbar;
