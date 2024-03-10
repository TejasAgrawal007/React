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

  const crearText = () => {
    setText("");
  };

  const removePunction = () => {
    
    let newText = text.split(/[.,/\#!$%\^&\*;:{}=\-_`~()]+/);
    setText(newText.join(" "));
  };

  const removeExtraSpace = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

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

        <button className="btn btn-primary mr-4 mt-3" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mr-4 mt-3 " onClick={lowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mr-4 mt-3 " onClick={crearText}>
          ClearText
        </button>
        <button className="btn btn-primary mr-4 mt-3 " onClick={removePunction}>
          Remove Punc
        </button>
        <button className="btn btn-primary mr-4 mt-3 " onClick={removeExtraSpace}>
          Remove Extra space
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to Read</p>

        <h3>Preview</h3>

        <code>{text}</code>
      </div>
    </>
  );
}

export default Textarea;
