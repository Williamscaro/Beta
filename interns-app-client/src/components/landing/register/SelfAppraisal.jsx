import React, { useState } from "react";

export default function SelfAppraisal() {
  const [values, setvalues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="main-container">
      <div className="row">
        <div className="col-2">
          <p>
            <strong>Description</strong>
          </p>
        </div>
        <div className="col">
          {values.map((x) => (
            <div className="form-check form-check-inline chec">
              <label className="form-check-inline chec2 ">
                <strong>{x}</strong>
              </label>
            </div>
          ))}
        </div>
      </div>
      {values.map((item) => (
        <div className="row">
          <div className="col-2">
            <p>hola como estas espero que bien</p>
          </div>
          <div className="col">
            {values.map((x) => (
              <div
                className="form-check form-check-inline"
                style={{ "margin-right": "1px" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
