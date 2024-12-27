import React, { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  overflow-x: auto;
  padding-bottom: 10px;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #ff7518 #e0e0e0;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7518;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Img = styled.img`
  height: 200px; /* Adjusted for better mobile display */
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0; /* Prevent shrinking inside a flex container */
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
