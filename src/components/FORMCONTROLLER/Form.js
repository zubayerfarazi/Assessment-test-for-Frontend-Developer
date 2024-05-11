import React, { useState } from "react";

import flightData from "../../data/LHR_CDG_ADT1_TYPE_1 [MConverter.eu].json";

import "./Form.css";
import TableInfo from "../TABLE_INFORMATION/TableInfo";
import ExtraInfo from "./Extra_Info";

const Form = () => {
  const [date, setDate] = useState();

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="fullForm">
        <input type="text" name="lhr" id="lhr" placeholder="LHR" />
        <input type="text" name="cdg" id="cdg" placeholder="CDG" />
        <input
          type="date"
          name="date"
          id="date"
          onChange={onDateChange}
          value={date}
          className="date"
        />
        <div className="inputWithIcon">
          <input type="text" name="dayMinus" id="dayMinus" placeholder="Day-" />
          <i class="ri-arrow-down-s-line"></i>
        </div>

        <div className="inputWithIcon">
          <input type="text" name="dayPlus" id="dayPlus" placeholder="Day+" />
          <i class="ri-arrow-down-s-line"></i>
        </div>

        <div className="inputWithIconAnytime">
          <input
            className="inputAnytime"
            type="text"
            name="anytime"
            id="anytime"
            placeholder="Any Time"
          />
          <i class="ri-arrow-down-s-line"></i>
        </div>

        <label htmlFor="">+</label>
        <div className="inputWithIcon">
          <input type="text" name="adt" id="adt" placeholder="ADT" />
          <i class="ri-arrow-down-s-line"></i>
        </div>

        <div className="inputWithIcon">
          <input type="text" name="one" id="one" placeholder="1" />
          <i class="ri-arrow-down-s-line"></i>
        </div>
        <label htmlFor="">+</label>

        <br />
      </form>
      <ExtraInfo></ExtraInfo>
      <TableInfo flightData={flightData}></TableInfo>
    </div>
  );
};

export default Form;
