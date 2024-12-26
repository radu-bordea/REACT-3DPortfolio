import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#111111"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[10.7579, 59.9114]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ff7518",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Oslo"}
        </text>
      </Annotation>
      <Annotation
        subject={[26.0963, 44.4396]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ff7518",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Bucharest"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
