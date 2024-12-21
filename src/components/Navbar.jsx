import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 30vh;
    position: absolute;
    top: 60px; /* Adjust based on navbar height */
    left: 0;
    background-color: black;
    z-index: 100;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-20px)"};
    pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  width: 400px;
  background: black;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease; /* Smooth transition for hover effect */
  
  &:hover {
    color: #FF7518; 
    /* font-size: 20px;  */
    letter-spacing: 6px;
    border-bottom: 2px solid #FF7518; /* Thin border under the item */
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 18px;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff7518;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80px;
    padding: 8px;
    font-size: 14px;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <Container>
        {/* <Logo src="./img/logo.png" /> */}

        {/* Hamburger icon - shown when menu is closed */}
        {!isOpen && (
          <Hamburger onClick={toggleMenu}>
            <FaBars />
          </Hamburger>
        )}

        {/* Links container */}
        <Links isOpen={isOpen}>
          <List>
            <ListItem>Home</ListItem>
            {/* Additional icons shown only when menu is open */}
            {isOpen && (
              <Icons>
                {/* <Icon src="./img/search.png" /> */}
                <Button>Gallery</Button>
              </Icons>
            )}
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>

            {/* Close Hamburger icon - shown only when menu is open */}
            {isOpen && (
              <Hamburger onClick={toggleMenu}>
                <FaTimes />
              </Hamburger>
            )}
          </List>
        </Links>

        {/* Icons shown when menu is closed */}
        {!isOpen && (
          <Icons>
            {/* <Icon src="./img/search.png" /> */}
            <Button>Gallery</Button>
          </Icons>
        )}
      </Container>
    </Section>
  );
};

export default Navbar;
