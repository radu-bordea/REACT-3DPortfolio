import React from "react";
import styled from "styled-components";

const Section = styled.div`
height: 70vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-left: 1px solid white;
  margin: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    border-left: 0px;
    text-align: center;
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: 36px;
  color: #f7c09b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: lightcyan;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  margin-bottom: 12px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Fitness = () => {
  return (
    <Section>
      <Title>Fitness</Title>
      <Text>
        Over the past six years, I’ve developed a consistent and effective
        fitness routine that adapts to the seasons.
      </Text>
      <Text>
        During the cold months, I hit the gym six days a week, focusing on two
        muscle groups per workout. I train each muscle group twice a week, and
        every session lasts about 45 minutes.
      </Text>
      <Text>
        My weekly schedule runs from Monday to Saturday, with Sunday reserved as
        my rest day to recover and recharge.
      </Text>
      <Text>
        {" "}
        When the weather warms up, I take my workouts outside and switch to a
        lighter, more functional approach. I focus on calisthenics, doing lots
        of pull-ups, push-ups, and core exercises. These outdoor sessions allow
        me to stay active while enjoying the fresh air and sunshine.
      </Text>
      <Text>
        This seasonal approach has helped me stay consistent, build strength,
        and maintain a balanced fitness routine year-round.
      </Text>
    </Section>
  );
};

export default Fitness;
