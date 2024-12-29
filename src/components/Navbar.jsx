import React, { useState } from "react"; 
import styled from "styled-components"; 

// Navbar container section with fixed positioning and full width
const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed; // Fixes navbar at the top
  top: 0;
  left: 0;
  width: 100%;
  background: black; /* Solid black background */
  z-index: 9999; // Ensures the navbar is above other content

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
`;

// Container holding the navbar content with responsive adjustments
const Container = styled.div`
  width: 1400px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
  }
`;

// Links section that controls the display of the menu on small screens
const Links = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")}; // Show menu if open is true
    flex-direction: column;
    background: black; /* Menu background for mobile */
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 9999;
  }
`;

// List of links in the navbar with responsive changes for small screens
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    text-align: center;
  }
`;

// Individual list items for the navigation links
const ListItem = styled.li`
  font-size: 24px;
  cursor: pointer;
  color: white;
  &:hover {
    color: #ff7518; // Underline effect on hover
  }
`;

// Hamburger icon for mobile menu, shows and hides based on screen size
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  color: white;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    display: block; // Shows the hamburger on small screens
    align-self: flex-start;
  }
`;

// Navbar component definition with props for scroll functions
const Navbar = ({
  scrollToHero,
  scrollToGallery,
  scrollToWho,
  scrollToWorks,
  scrollToContact,
}) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  // Handles click on menu items and triggers scrolling
  const handleMenuItemClick = (scrollFunction) => {
    scrollFunction(); // Trigger the scroll action
    setMenuOpen(false); // Close the menu after selection
  };

  return (
    <Section>
      <Container>
        {/* Hamburger button toggles the menu open/close */}
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"} {/* Changes icon based on menu state */}
        </Hamburger>
        <Links open={menuOpen}> {/* Pass open state to Links */}
          <List>
            <ListItem onClick={() => handleMenuItemClick(scrollToHero)}>Hero</ListItem>
            <ListItem onClick={() => handleMenuItemClick(scrollToGallery)}>Gallery</ListItem>
            <ListItem onClick={() => handleMenuItemClick(scrollToWho)}>Who</ListItem>
            <ListItem onClick={() => handleMenuItemClick(scrollToWorks)}>Works</ListItem>
            <ListItem onClick={() => handleMenuItemClick(scrollToContact)}>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar; // Export the Navbar component
