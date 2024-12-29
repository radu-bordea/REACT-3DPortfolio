import React from "react"; 
import styled from "styled-components"; 

// Section styled-component: Defines the layout and styles for the container
const Section = styled.div`
  scroll-snap-align: center; // Ensures smooth scrolling alignment
  display: flex; // Flexbox for flexible layout
  justify-content: center; // Centers content horizontally
  padding: 30px; // Adds padding around the content
  border-left: 1px solid white; // Adds a left border with a white color
  display: flex; // Re-declares flex display
  flex-direction: column; // Arranges items vertically

  @media screen and (max-width: 768px) {
    border-left: 0px; // Removes left border on smaller screens
    text-align: center; // Centers text for better readability on mobile
    padding: 0; // Removes padding on smaller screens
  }
`;

// Title styled-component: Defines the appearance of the title
const Title = styled.div`
  font-size: 36px; // Sets font size for large screens
  color: #f7c09b; // Defines a light peach color for the text
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; // Sets a serif font family
  font-weight: 300; // Uses a light font weight
  letter-spacing: 2px; // Adds space between letters
  margin-bottom: 10px; // Adds space below the title

  @media only screen and (max-width: 768px) {
    font-size: 24px; // Reduces font size on smaller screens
  }
`;

// Text styled-component: Defines the appearance of the body text
const Text = styled.div`
  font-size: 20px; // Sets the font size for normal screens
  color: lightcyan; // Sets the text color to light cyan
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; // Uses the same serif font
  letter-spacing: 2px; // Adds spacing between letters
  margin-bottom: 12px; // Adds space below the text

  @media only screen and (max-width: 768px) {
    font-size: 16px; // Reduces font size for smaller screens
  }
`;

// Diet component: Displays a section about the user's diet and routine
const Diet = () => {
  return (
    <Section>
      <Title>Diet</Title> {/* Title of the diet section */}
      <Text>
        I’ve practiced intermittent fasting for years, focusing on two meals a
        day at 11:30 AM and 6:00 PM.
      </Text> {/* Describes the user's fasting routine */}
      <Text>
        I’ve cut out sugar but enjoy nutrient-packed berries and grapefruit for
        natural sweetness.
      </Text> {/* Describes dietary changes and choices */}
      <Text>
        I stay hydrated with 2.3 liters of water daily and replenish with
        protein shakes post-workout.
      </Text> {/* Highlights hydration and post-workout habits */}
      <Text>
        This balanced routine keeps me healthy, energized, and focused
        year-round.
      </Text> {/* Summarizes the benefits of the routine */}
    </Section>
  );
};

export default Diet; // Exports the Diet component for use in other parts of the application
