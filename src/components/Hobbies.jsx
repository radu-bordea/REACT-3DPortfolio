import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 70vh;
  width: 40vw;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding: 50px;
  border-left: 1px solid white;
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  color: #f7c09b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  color: lightcyan;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

const Hobbies = () => {
  return (
    <Section>
      <Title>Hobbies</Title>
      <Text>
  I’ve always been passionate about staying active and learning new things. My hobbies include running, playing football, going to the gym, and doing calisthenics to keep fit.
</Text>
<Text>
  As a recent developer graduate, I enjoy building websites, which lets me combine creativity and technical skills. It's always fulfilling to see a project come together.
</Text>
<Text>
  Outside of work, I enjoy dressing well, taking evening walks, and meeting friends once or twice a week. These activities help me relax and stay connected with others.
</Text>
<Text>
  I also focus on self-development, health, and fitness, and enjoy reading books to broaden my knowledge. These hobbies help me grow both personally and professionally.
</Text>

    </Section>
  );
};

export default Hobbies;
