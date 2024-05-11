import React from "react";

import "./Extra_Info.css";

const ExtraInfo = () => {
  return (
    <div className="extraInformation">
      <div>
        <input type="checkbox" />
        <label htmlFor="">Extra Option</label>
      </div>

      <div>
        <input type="radio" />
        <label htmlFor="">Environment</label>
        <input type="radio" checked />
        <label htmlFor="">Dummy</label>
        <input type="radio" />
        <label htmlFor="">PDT</label>
      </div>

      <button className="button" type="submit">
        Submit
      </button>
    </div>
  );
};

export default ExtraInfo;
