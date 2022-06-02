import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked  " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  //rajex logic
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChnage = (event) => {
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
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to Upparcase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
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
