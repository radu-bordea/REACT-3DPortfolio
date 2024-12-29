
import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

// Styled component for the main section
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

// Container for both the form and map, using flexbox to position them side by side
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

// Left section for the contact form, aligning content based on screen size
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

// Title of the contact form, styled as an h1
const Title = styled.h1`
  font-weight: 200;
`;

// Styled component for the form container, defining layout and gap
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

// Input field for the form, styled with padding and background color
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

// Text area for the message input, styled similarly to the Input field
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

// Button for submitting the form, with background color and padding
const Button = styled.button`
  background-color: #ff7518;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

// Right section for the map component, hidden on smaller screens
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// ForwardRef to allow the parent to pass a ref to the section and form submission logic
const Contact = forwardRef((props, ref) => {
  // Create a reference to the form and track submission success
  const refSubmit = useRef();
  const [success, setSuccess] = useState(null);

  // Handle form submission, sending the form data with emailjs
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form using emailjs
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        refSubmit.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true); // Set success if message is sent
        },
        (error) => {
          console.log(error.text);
          setSuccess(false); // Set failure if there's an error
        }
      );
  };

  return (
    <Section ref={ref}>
      <Container>
        <Left>
          {/* Form submission handling using refSubmit */}
          <Form ref={refSubmit} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {/* Display success message upon successful submission */}
            {success &&
              "Your message has been sent. We'll get back to you soon..."}
          </Form>
        </Left>
        <Right>
          {/* Map component on the right side of the screen */}
          <Map />
        </Right>
      </Container>
    </Section>
  );
});

export default Contact;
