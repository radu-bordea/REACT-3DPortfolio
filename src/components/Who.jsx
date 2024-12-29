import styled from "styled-components"; 
import { OrbitControls } from "@react-three/drei"; // Import OrbitControls for 3D model interaction
import { Canvas } from "@react-three/fiber"; // Import Canvas from @react-three/fiber for rendering 3D models
import Cube from "./Cube"; // Import Cube component for rendering a 3D cube
import { forwardRef } from "react"; // Import forwardRef for passing ref down to components

// Section container with full height and scroll-snap alignment
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; // Ensures this section aligns when scrolling
  display: flex;
  justify-content: center; // Center content horizontally
`;

// Container for the entire section with responsive styling for layout
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between; // Space out left and right sections

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column; // Stack sections vertically on smaller screens
  }
`;

// Left section for the 3D canvas with hidden on small screens
const Left = styled.div`
  flex: 1; // Takes up half of the container

  @media only screen and (max-width: 768px) {
    display: none; // Hide the 3D model on mobile screens
  }
`;

// Title styling with responsive font size
const Title = styled.h1`
  font-size: 48px;

  @media only screen and (max-width: 768px) {
    font-size: 36px; // Reduce font size on smaller screens
  }
`;

// Right section for the text content with flex layout and center alignment
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px; // Space out elements vertically

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center; // Center align text on mobile
  }
`;

// Styling for the "What We Do" section with horizontal flex
const WhatWeDo = styled.div`
  display: flex;
  align-items: center; // Align items vertically in the center
  gap: 10px; // Space out the items
`;

// Line separator for a visual element between text
const Line = styled.img`
  margin: 10px;
  height: 5px; // Height of the line separator
`;

// Subtitle with custom color
const Subtitle = styled.span`
  color: #ff7518; // Orange color for subtitle
`;

// Description styling with lightcyan text color and responsive font size
const Desc = styled.p`
  font-size: 20px;
  color: lightcyan;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px; // Add space between letters
  margin-bottom: 12px;

  @media only screen and (max-width: 768px) {
    font-size: 16px; // Smaller font size on mobile
    padding: 16px; // Add padding around text for readability
  }
`;

// The Who component using forwardRef to pass the ref down to the section
const Who = forwardRef((props, ref) => {
  return (
    <Section ref={ref}> {/* Forwarding ref to the Section element */}
      <Container>
        <Left>
          {/* 3D model rendering with Canvas and OrbitControls */}
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate /> {/* Enable auto-rotation without zoom */}
            <ambientLight intensity={1} /> {/* Ambient light for overall lighting */}
            <directionalLight position={[5, 2, 1]} /> {/* Directional light source */}
            <Cube /> {/* The Cube component for 3D rendering */}
          </Canvas>
        </Left>
        <Right>
          <Title>Adapt. Inspire. Grow.</Title> {/* Main heading */}
          
          <WhatWeDo>
            <Line src="./img/line.png" /> {/* Line separator */}
            <Subtitle>Believe</Subtitle> {/* Subtitle for emphasis */}
          </WhatWeDo>
          
          {/* Description paragraph with text content */}
          <Desc>
            Passionate about fitness, healthy living, and self-development. I
            enjoy cycling, running, and walking. A coding enthusiast who loves
            building websites. Always eager to learn, grow, and share
            knowledge with others.
          </Desc>
        </Right>
      </Container>
    </Section>
  );
});

export default Who; // Export the Who component
