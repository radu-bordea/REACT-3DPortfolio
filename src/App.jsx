import styled from "styled-components"; // Ensure styled-components is imported
import Hero from "./components/Hero";
import Gallery from './components/Gallery'
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg4.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

import React from "react";

const App = () => {
  return (
    <Container>
      <Hero />
      {/* <Gallery/> */}
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;
