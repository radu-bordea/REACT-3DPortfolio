import React from "react";
import styled from "styled-components";

// Section component styles the main wrapper to center its content
const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;  /* Keep the navbar fixed */
  top: 0;           /* Place it at the top */
  left: 0;
  width: 100%;      /* Full width */
  background: rgba(0, 0, 0); /* Optional: add a translucent background */
  z-index: 9999;    /* Make sure it's above other content */
`;

// Container component organizes its children horizontally and adds padding
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

// Links component groups navigation links and the logo
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px; // Space between elements
`;

// List component styles the navigation menu
const List = styled.ul`
  display: flex;
  gap: 20px; // Space between list items
  list-style: none;
`;

// ListItem component styles each navigation menu item
const ListItem = styled.li`
  font-size: 24px;
  cursor: pointer; // Add a pointer cursor for interactivity
  &:hover {
    border-bottom: 1px solid #ff7518;
  }
`;

const Navbar = ({
  scrollToHero,
  scrollToGallery,
  scrollToWho,
  scrollToWorks,
  scrollToContact,
}) => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem onClick={scrollToHero}>Hero</ListItem>
            <ListItem onClick={scrollToGallery}>Gallery</ListItem>
            <ListItem onClick={scrollToWho}>Who</ListItem>
            <ListItem onClick={scrollToWorks}>Works</ListItem>
            <ListItem onClick={scrollToContact}>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
