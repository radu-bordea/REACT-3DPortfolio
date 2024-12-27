import { forwardRef, useState } from "react";
import styled from "styled-components";
import Fitness from "./Fitness";
import Diet from "./Diet";
import Hobbies from "./Hobbies";

const data = ["Fitness", "Diet", "Hobbies"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const ListItem = styled.li`
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  font-size: 36px;

  &:hover {
    color: #ff7518;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 768px) {
    color: white;
    font-size: 24px;
    -webkit-text-stroke: 0px;
  }
`;

const Right = styled.div`
  flex: 3;

`;

const Works = forwardRef((props, ref) => {
  const [work, setWork] = useState("Fitness");

  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Fitness" ? (
            <Fitness />
          ) : work === "Diet" ? (
            <Diet />
          ) : (
            <Hobbies />
          )}
        </Right>
      </Container>
    </Section>
  );
});

export default Works;
