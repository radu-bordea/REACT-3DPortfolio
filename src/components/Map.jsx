import React from "react"; 
import {
  ComposableMap, // Import ComposableMap for rendering the map
  Geographies, // Import Geographies to load geographical data
  Geography, // Import Geography to render individual geographical regions
  Annotation, // Import Annotation for adding labels to locations
  ZoomableGroup, // Import ZoomableGroup to allow map zooming (though not used here)
} from "react-simple-maps"; // Import map components from react-simple-maps library

// MapChart component: Renders the map with annotations
const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea" // Specifies the map projection type
      projectionConfig={{
        rotate: [-10.0, -52.0, 0], // Adjusts the map rotation (longitude, latitude, and altitude)
        center: [-5, -3], // Centers the map around the given coordinates
        scale: 1100, // Adjusts the scale of the map
      }}
      style={{ width: "100%", height: "100%" }} // Ensures the map fills the container
    >
      <Geographies
        geography="/features.json" // Path to the geographical data (GeoJSON)
        fill="#111111" // Sets the fill color for the regions
        stroke="#FFFFFF" // Sets the stroke (border) color for the regions
        strokeWidth={0.5} // Sets the stroke width for borders
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} /> // Maps over geographical data and renders each region
          ))
        }
      </Geographies>
      {/* Annotation for Oslo */}
      <Annotation
        subject={[10.7579, 59.9114]} // Coordinates for Oslo
        dx={-90} // X offset for label position
        dy={-30} // Y offset for label position
        connectorProps={{
          stroke: "#ff7518", // Color of the connector line
          strokeWidth: 1, // Width of the connector line
          strokeLinecap: "round", // Round cap for the connector line
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Oslo"} {/* Label text for Oslo */}
        </text>
      </Annotation>
      {/* Annotation for Bucharest */}
      <Annotation
        subject={[26.0963, 44.4396]} // Coordinates for Bucharest
        dx={-90} // X offset for label position
        dy={-30} // Y offset for label position
        connectorProps={{
          stroke: "#ff7518", // Color of the connector line
          strokeWidth: 1, // Width of the connector line
          strokeLinecap: "round", // Round cap for the connector line
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Bucharest"} {/* Label text for Bucharest */}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart; // Exports the MapChart component for use in other parts of the application
