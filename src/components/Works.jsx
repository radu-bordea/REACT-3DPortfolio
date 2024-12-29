import { forwardRef, useState } from "react"; 
import styled from "styled-components"; 
import Fitness from "./Fitness"; 
import Diet from "./Diet"; 
import Hobbies from "./Hobbies"; 

// Array to store the categories (Fitness, Diet, Hobbies)
const data = ["Fitness", "Diet", "Hobbies"];

// Styled Section container with full height and scroll-snap alignment
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; // Ensures the section aligns in the viewport when scrolling
  display: flex;
  justify-content: center; // Centers the content horizontally
`;

// Container for the left and right sections with responsive layout
const Container = styled.div`
  display: flex;
  justify-content: space-between; // Space out the left and right sections

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column; // Stack sections vertically on smaller screens
  }
`;

// Left section where the list of categories (Fitness, Diet, Hobbies) is displayed
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center; // Centers the list vertically and horizontally
  @media only screen and (max-width: 768px) {
    height: 20%; // Adjust the height on smaller screens
  }
`;

// Styled unordered list to display the categories
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column; // Display items vertically by default
  gap: 20px; // Space out list items

  @media only screen and (max-width: 768px) {
    flex-direction: row; // Display items horizontally on smaller screens
  }
`;

// Styled list item for each category (Fitness, Diet, Hobbies)
const ListItem = styled.li`
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white; // Add a white outline to the text
  position: relative;
  font-size: 36px;

  &:hover {
    color: #ff7518; // Change text color on hover
  }

  @media only screen and (max-width: 768px) {
    color: white; // White text on smaller screens
    font-size: 24px; // Smaller font size on mobile
    -webkit-text-stroke: 0px; // Remove text stroke on mobile
  }
`;

// Right section where the selected content (Fitness, Diet, Hobbies) will be rendered
const Right = styled.div`
  flex: 3;
  padding-top: 10%; // Add padding to the top to offset content

  @media only screen and (max-width: 768px) {
    padding-top: 0px; // Remove top padding on smaller screens
    padding: 0 10%; // Add left and right padding on mobile
  }
`;

// Works component using forwardRef to pass ref down to the section
const Works = forwardRef((props, ref) => {
  const [work, setWork] = useState("Fitness"); // Default category is Fitness

  return (
    <Section ref={ref}> {/* Forwarding the ref to the Section element */}
      <Container>
        <Left>
          {/* List of categories to switch between */}
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={() => setWork(item)}>
                {item} {/* Display the category name */}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {/* Conditionally render the corresponding component based on the selected category */}
          {work === "Fitness" ? (
            <Fitness /> // Render Fitness component
          ) : work === "Diet" ? (
            <Diet /> // Render Diet component
          ) : (
            <Hobbies /> // Render Hobbies component
          )}
        </Right>
      </Container>
    </Section>
  );
});

export default Works; // Export the Works component
