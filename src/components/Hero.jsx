import { forwardRef } from "react"; 
import styled from "styled-components"; 

// Section styled-component: Defines the layout and styles for the overall container
const Section = styled.div`
  height: 100vh; // Full viewport height
  scroll-snap-align: center; // Ensures smooth scrolling alignment
  display: flex; // Flexbox for flexible layout
  flex-direction: column; // Arranges items vertically
  align-items: center; // Centers items horizontally
  justify-content: space-between; // Spreads items evenly along the vertical axis

  @media only screen and (max-width:768px) {
    width: 100%; // Full width on small screens
    flex-direction: column; // Stacks items vertically on smaller screens
    align-items: center; // Centers content on mobile
    justify-content: center; // Centers content vertically on mobile
  }
`;

// Container styled-component: Holds the main content and arranges items horizontally
const Container = styled.div`
  height: 100%; // Full height of the section
  scroll-snap-align: center; // Ensures smooth scrolling alignment
  width: 1400px; // Fixed width for large screens
  display: flex; // Flexbox layout
  justify-content: space-between; // Spreads out child components evenly

  @media only screen and (max-width:768px) {
    width: 100%; // Full width on mobile screens
    flex-direction: column; // Stacks items vertically on mobile
    align-items: center; // Centers items horizontally
    justify-content: center; // Centers items vertically
  }
`;

// Left styled-component: Contains the title and description on the left side
const Left = styled.div`
  flex: 2; // Takes up 2 parts of the available space
  display: flex; // Flexbox layout
  flex-direction: column; // Stacks children vertically
  justify-content: center; // Centers children vertically
  gap: 20px; // Adds space between elements

  @media only screen and (max-width:768px) {
    flex: 1; // Takes up 1 part of the available space on smaller screens
    align-items: center; // Centers content horizontally
    padding-top: 50px; // Adds padding on top for better layout on mobile
  }
`;

// Title styled-component: Styles the main heading
const Title = styled.h1`
  font-size: 48px; // Large font size for the title

  @media only screen and (max-width:768px) {
    text-align: center; // Centers the title on small screens
  }
`;

// Line styled-component: Defines a thin line below the title
const Line = styled.img`
  margin: 10px; // Adds space around the line
  height: 5px; // Sets the height of the line
`;

// Subtitle styled-component: Styles the subtitle with a distinct color
const Subtitle = styled.span`
  color: #ff7518; // Orange color for the subtitle
`;

// Desc styled-component: Defines the description text
const Desc = styled.p`
  font-size: 24px; // Sets font size for the description
  color: lightgray; // Light gray color for the text

  @media only screen and (max-width:768px) {
    text-align: center; // Centers the description on small screens
  }
`;

// Right styled-component: Contains the image on the right side
const Right = styled.div`
  flex: 3; // Takes up 3 parts of the available space
  position: relative; // Allows absolute positioning of the image
  display: flex; // Flexbox layout
  flex-direction: row; // Arranges children horizontally
  gap: 5px; // Adds space between the image and other elements

  @media only screen and (max-width:768px) {
    flex: 2; // Takes up 2 parts of the space on mobile
    width: 100%; // Full width on smaller screens
    width: 300px; // Sets a fixed width for the image container
    height: 300px; // Defines a fixed height for the image container
  }
`;

// Img styled-component: Defines the appearance of the image
const Img = styled.img`
  width: 400px; // Width of the image
  object-fit: contain; // Ensures the image maintains its aspect ratio
  position: absolute; // Absolute positioning inside the container
  top: 0; bottom: 0; left: 0; right: 0; margin: auto; // Centers the image inside the container
  animation: animate 2s infinite ease alternate; // Adds animation to the image

  @media only screen and (max-width:768px) {
    width: 300px; // Reduces the image width on smaller screens
  }
`;

// Hero component: The main component to display hero section with title, description, and image
const Hero = forwardRef((props, ref) => {
  return (
    <Section ref={ref}> {/* Main section that wraps the content */}
      <Container>
        <Left>
          {/* Title and branding section */}
          <Title>
            RaduBordea
            <Line src="./img/line.png" /> {/* Line below the title */}
            <Subtitle>Official</Subtitle> {/* Subtitle with distinct color */}
          </Title>
          <Desc>Lifestyle, Fitness, Modeling</Desc> {/* Description of the brand */}
        </Left>
        <Right>
          <Img src="./img/0.png" /> {/* Main image with animation */}
        </Right>
      </Container>
    </Section>
  );
});

export default Hero; // Exports the Hero component for use in other parts of the application
