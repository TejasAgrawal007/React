import React, { useState } from "react";

function Textarea() {
  const [text, setText] = useState("Drop Your Text...");

  const onHandleChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container my-4">
        <div className="form-group">
          <h1>Drop Your text and Analyse</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="11"
            value={text}
            onChange={onHandleChange}
          ></textarea>
        </div>

        <button className="btn btn-primary mr-4" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary" onClick={lowerCase}>
          LowerCase
        </button>
      </div>
    </>
  );
}

export default Textarea;
