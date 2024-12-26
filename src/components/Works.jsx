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
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:hover {
    color: #ff7518;
    letter-spacing: 3px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = forwardRef((props,ref) => {
  const [work, setWork] = useState("Fitness");

  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={()=>setWork(item)}>
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
