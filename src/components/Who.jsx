import React from "react";
import styled from "styled-components";

// Section component styles the main wrapper with full-screen height and snapping alignment
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

// Container component provides a fixed width and organizes child components side by side
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

// Left component is an empty placeholder for now; hidden on smaller screens
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// Title component styles the main heading text with responsive font sizing
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

// Right component organizes content vertically, with responsive alignment
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

// WhatWeDo styles a small section combining a line and subtitle
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Line component for decorative lines in the "WhatWeDo" section
const Line = styled.img`
  height: 5px;
`;

// Subtitle styles the smaller secondary heading
const Subtitle = styled.h2`
  color: #ff7518;
`;

// Desc component styles the description text below the subtitle
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

// Button component styles the call-to-action button
const Button = styled.button`
  background-color: #ff7518;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Who component structure combining Left and Right sections for content
const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* Placeholder section, currently empty */}
        </Left>
        <Right>
          {/* Title and branding section */}
          <Title>Be outside the box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" /> {/* Decorative line image */}
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          {/* Description and call-to-action button */}
          <Desc>
            A model, artist passionate about nature, love and positivity
          </Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
