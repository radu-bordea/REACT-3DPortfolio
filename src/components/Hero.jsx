import { forwardRef } from "react";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width:768px) {
    flex:1;
    align-items: center;
    padding-top: 50px;
  }
`;


const Title = styled.h1`
  font-size: 48px;

  @media only screen and (max-width:768px) {
    text-align: center;
  }
`;


const Line = styled.img`
  margin: 10px;
  height: 5px;
`;


const Subtitle = styled.span`
  color: #ff7518;
`;


const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width:768px) {
    text-align: center;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media only screen and (max-width:768px) {
    flex: 2;
    width: 100%;
    width: 300px;
    height: 300px;
  }
`;


const Img = styled.img`
  width: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width:768px) {
    width: 300px;
  }
`;


const Hero = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <Left>
          {/* Title and branding section */}
          <Title>
            RaduBordea
            <Line src="./img/line.png" />
            <Subtitle>Official</Subtitle>
          </Title>
          <Desc>Lifestyle, Fitness, Modeling</Desc>
        </Left>
        <Right>
          <Img src="./img/2.png" />
        </Right>
      </Container>
    </Section>
  );
});

export default Hero;
