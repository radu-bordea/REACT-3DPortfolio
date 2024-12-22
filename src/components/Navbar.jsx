import React from "react";
import styled from "styled-components";

// Section component styles the main wrapper to center its content
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%; // Adjust width for smaller screens
  }
`;

// Container component organizes its children horizontally and adds padding
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%; // Adjust width for responsiveness
    padding: 10px;
  }
`;

// Links component groups navigation links and the logo
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px; // Space between elements
`;

// Logo component styles the image for the logo
const Logo = styled.img`
  height: 50px;
`;

// List component styles the navigation menu
const List = styled.ul`
  display: flex;
  gap: 20px; // Space between list items
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none; // Hide the navigation menu on smaller screens
  }
`;

// ListItem component styles each navigation menu item
const ListItem = styled.li`
  cursor: pointer; // Add a pointer cursor for interactivity
`;

// Icons component groups interactive elements like icons and buttons
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; // Space between icons and the button
`;

// Icon component styles the individual icons
const Icon = styled.img`
  width: 20px;
  cursor: pointer; // Make icons clickable
`;

// Button component styles the "Hire Now" call-to-action button
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff7518; // Custom orange color
  color: white;
  border: none;
  border-radius: 5px; // Rounded corners
  cursor: pointer; // Add interactivity
`;

// Navbar component combines all styled components into a cohesive layout
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* Navigation menu with placeholder items */}
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Placeholder for a search icon */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
