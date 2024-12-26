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

const Diet = () => {
  return (
    <Section>
      <Title>Diet</Title>
      <Text>
        For the past few years, I’ve adopted intermittent fasting as a
        consistent and effective approach to my nutrition.
      </Text>
      <Text>
        I have two meals each day: my first meal is at 11:30 AM, and my second
        meal is at 6:00 PM. This schedule keeps me feeling energized and focused
        throughout the day.
      </Text>
      <Text>
        Recently, I decided to give up sugar, but I still enjoy a variety of
        berries and grapefruit after meals. These provide natural sweetness and
        are packed with nutrients.
      </Text>
      <Text>
        I make sure to stay hydrated by drinking about 2.3 liters of water
        daily. After workouts, I replenish with a protein shake made with almond
        or hazelnut milk, which supports recovery and muscle growth.
      </Text>
      <Text>
        This approach has helped me maintain a balanced and sustainable
        lifestyle, keeping me healthy and energized year-round.
      </Text>
    </Section>
  );
};

export default Diet;
