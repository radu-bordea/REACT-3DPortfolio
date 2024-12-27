import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0);
  z-index: 9999;
  
  @media only screen and (max-width:768px) {
    width: 100%;
    display: none;
  }
`;

const Container = styled.div`
  width: 1400px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;

  @media only screen and (max-width:768px) {
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width:768px) {
    flex-direction: column;
    
  }
`;

const ListItem = styled.li`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #ff7518;
  }
`;

const Navbar = ({
  scrollToHero,
  scrollToGallery,
  scrollToWho,
  scrollToWorks,
  scrollToContact,
}) => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem onClick={scrollToHero}>Hero</ListItem>
            <ListItem onClick={scrollToGallery}>Gallery</ListItem>
            <ListItem onClick={scrollToWho}>Who</ListItem>
            <ListItem onClick={scrollToWorks}>Works</ListItem>
            <ListItem onClick={scrollToContact}>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
