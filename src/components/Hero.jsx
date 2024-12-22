import styled from "styled-components";
import Navbar from "./Navbar";

// Section component styles the main wrapper with full-screen height and snapping alignment
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// Container component provides a fixed width and organizes child components side by side
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

// Left section for content such as title, description, and button
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

// Title component styles the main heading text
const Title = styled.h1`
  font-size: 48px;
`;

// WhatWeDo section for organizing elements horizontally (currently unused)
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Line component for decorative line images in the title
const Line = styled.img`
  margin: 10px;
  height: 5px;
`;

// Subtitle styles a highlighted portion of the title
const Subtitle = styled.span`
  color: #ff7518;
`;

// Desc component styles the description text below the title
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

// Button component styles the call-to-action button
const Button = styled.button`
  background-color: #ff7518;
  color: white;
  font-weight: 500px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Right section for displaying visuals such as images
const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

// Img component styles the main image, includes animation for floating effect
const Img = styled.img`
  width: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  // Keyframe animation to create a floating effect
  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

// Hero component structure that combines Navbar, Left, and Right sections
const Hero = () => {
  return (
    <Section>
      <Navbar /> {/* Navigation bar */}
      <Container>
        <Left>
          {/* Title and branding section */}
          <Title>
            RaduBordea
            <Line src="./img/line.png" />
            <Subtitle>Official</Subtitle>
          </Title>
          {/* Description and call-to-action button */}
          <Desc>Lifestyle, Fitness, Modeling</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* Placeholder for a 3D model */}
          <Img src="./img/2.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
