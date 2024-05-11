import React from "react";

import "./TripInfo.css";

const TripInfo = () => {
  return (
    <div
      style={{
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button>Round Trip</button>
      <button>One Way</button>
      <button>Multi City</button>
    </div>
  );
};

export default TripInfo;
