import React, { useRef } from "react"; 
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei"; 
import { useFrame } from "@react-three/fiber"; 

// Cube component definition
const Cube = () => {
  // Create a reference for the Text component
  const textRef = useRef();

  // useFrame hook to update the position of the text on each frame
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2) // Make the text move left and right based on the sine wave
  );

  return (
    <mesh>
      {/* Create a cube mesh with standard material */}
      <boxGeometry /> {/* Cube geometry */}
      <meshStandardMaterial>
        {/* RenderTexture component to apply a texture */}
        <RenderTexture attach="map">
          {/* PerspectiveCamera component to define the camera used for the texture */}
          <PerspectiveCamera makeDefault position={[0, 0, 5]} /> {/* Set the camera position */}
          <color attach="background" args={["#f7c19e"]} /> {/* Set background color for the texture */}
          {/* Text component that will display the "hello" text */}
          <Text ref={textRef} fontSize={2} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

// Export the Cube component for use in other parts of the application
export default Cube;
