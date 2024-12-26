import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { forwardRef } from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

const Button = styled.button`
  background-color: #ff7518;
  color: white;
  font-weight: 500px;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Adapt. Inspire. Grow.</Title>

          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Believe</Subtitle>
          </WhatWeDo>
          <Desc>
            <Desc>
              Passionate about fitness, healthy living, and self-development. I
              enjoy cycling, running, and walking. A coding enthusiast who loves
              building websites. Always eager to learn, grow, and share
              knowledge with others.
            </Desc>
          </Desc>
        </Right>
      </Container>
    </Section>
  );
});

export default Who;
