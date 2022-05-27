import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked  " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked  " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChnage = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="contianer">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to Upparcase
        </button>
        <button className="btn btn-success mx -2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
