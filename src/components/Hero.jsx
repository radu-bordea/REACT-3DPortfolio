import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-size: 48px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Line = styled.img`
  height: 5px;

  @media (max-width: 1024px) {
    height: 4px;
  }

  @media (max-width: 768px) {
    height: 3px;
  }
`;

const Subtitle = styled.h2`
  color: #FF7518;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #FF7518;
  color: white;
  font-weight: 500px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 90px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    width: 80px;
    padding: 7px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Img = styled.img`
  width: 500px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>RaduBordea</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Official</Subtitle>
          </WhatWeDo>
          <Desc>Lifestyle, Fitness, Modeling</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/2.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
