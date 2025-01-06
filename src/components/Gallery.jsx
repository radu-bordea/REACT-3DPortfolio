import React, { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%; /* Adjust padding for the gallery page */
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Prevent scrolling on the outer container */
`;

const GalleryContainer = styled.div`
  display: flex; /* Use flexbox for horizontal scrolling */
  gap: 20px;
  width: auto; /* Width adapts based on content */
  height: 100%; /* Full height of the viewport */
  overflow-x: auto; /* Enable horizontal scrolling */
  overflow-y: hidden; /* Disable vertical scrolling */
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #ff7518 #e0e0e0;

  ::-webkit-scrollbar {
    height: 8px; /* Horizontal scrollbar height */
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7518;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    height: 100%; /* Maintain full height on mobile */
  }
`;

const ImgContainer = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* Each image takes 1/3 of the viewport width minus the gap */
  height: 100%; /* Full height of the viewport */
  @media (max-width: 768px) {
    flex: 0 0 100%; /* Each image takes full width on mobile */
  }
`;

const Img = styled.img`
  width: 100%; /* Fills the container width */
  height: 100%; /* Fills the container height */
  object-fit: cover; /* Prevents distortion */
  border-radius: 10px; /* Rounded corners */
  @media (max-width: 768px) {
  margin-top: 40%;
    height: 70%;
  }
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
          <ImgContainer key={index}>
            <Img src={image} alt={`Gallery Image ${index + 1}`} />
          </ImgContainer>
        ))}
      </GalleryContainer>
    </Section>
  );
});

export default Gallery;
