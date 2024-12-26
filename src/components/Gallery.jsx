import React, { forwardRef } from "react";
import styled from "styled-components";

// Section container
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%; /* Full width */
`;

// Gallery container using flex for alignment
const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1400px; /* Limit the width to 1400px */
  overflow-x: auto; /* Allow horizontal scrolling */
  padding-bottom: 10px; /* Optional: Add some space below the scroll */
  box-sizing: border-box; /* Ensure padding does not cause overflow */
  scrollbar-width: thin; /* Firefox - makes the scrollbar thinner */
  scrollbar-color: #ff7518 #e0e0e0; /* Firefox - scrollbar color (thumb and track) */

  /* Customizing scrollbar for Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    height: 8px; /* Set height for horizontal scroll */
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0; /* Track color */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7518; /* Thumb color */
    border-radius: 4px; /* Rounded thumb */
  }

  /* Smooth scrolling */
  scroll-behavior: smooth;

  @media (max-width: 1024px) {
    /* 2 columns for tablet */
    flex-wrap: nowrap; /* No wrapping, all items stay in a single row */
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    /* 1 column for mobile */
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

// Individual image styling
const Img = styled.img`
  height: 500px; /* Adjust height for better aspect ratio */
  object-fit: cover; /* Ensure the image fully covers the area */
  border-radius: 10px; /* Optional: Add rounded corners */
`;

const Gallery = forwardRef((props, ref) => {
  const images = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.jpg",
  ];

  return (
    <Section ref={ref}>
      <GalleryContainer>
        {images.map((image, index) => (
          <Img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
        ))}
      </GalleryContainer>
    </Section>
  );
});

export default Gallery;
