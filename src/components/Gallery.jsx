
import React, { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%; /* 10% padding for the gallery page */
  width: 100%;
  box-sizing: border-box;
`;

const GalleryContainer = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
  grid-auto-rows: 1fr; /* Equal row height on desktop */
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #ff7518 #e0e0e0;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7518;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
    grid-template-rows: repeat(3, 1fr); /* 3 rows of equal height */
    height: 100%; /* Full height on mobile */
  }
`;



const Img = styled.img`
  width: 100%; /* Fills the width of the grid cell */
  height: 100%; /* Fills the height of the grid cell */
  object-fit: cover; /* Prevents distortion */
  border-radius: 10px; /* Rounded corners */
`;



const Gallery = forwardRef((props, ref) => {
  const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
    "./img/10.png",
    "./img/11.png",
    "./img/12.png",
    "./img/13.jpg",
    "./img/14.jpg",
    "./img/15.jpg",
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
