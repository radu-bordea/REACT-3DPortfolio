import React, { useRef } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg4.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: 80px; /* Adjust this padding based on navbar height */
`;

const App = () => {
  const heroRef = useRef();
  const galleryRef = useRef();
  const whoRef = useRef();
  const worksRef = useRef();
  const contactRef = useRef();

  // Scroll functions to each section
  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWho = () => {
    whoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Navbar
        scrollToHero={scrollToHero}
        scrollToGallery={scrollToGallery}
        scrollToWho={scrollToWho}
        scrollToWorks={scrollToWorks}
        scrollToContact={scrollToContact}
      />
      <Hero ref={heroRef} />
      <Gallery ref={galleryRef} />
      <Who ref={whoRef} />
      <Works ref={worksRef} />
      <Contact ref={contactRef} />
    </Container>
  );
};

export default App;
