import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked  " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copy to clipboard!", "success");
  };
  //rajex logic
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="contianer"
        style={{
          color: props.mode === "dark" ? "white" : "#09492b",
        }}
      >
        <h1 className="mb-4 my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#6aefb1" : "white",
              color: props.mode === "dark" ? "white" : "#09492b",
            }}
            value={text}
            onChange={handleOnChnage}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1 my-1" onClick={handleUpClick}>
          Convert to Upparcase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#09492b",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
