import React from "react";

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  // this is past mode code for practice
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#1e915b",
    backgroundColor: props.mode === "dark" ? "#1e915b" : "white",
  };
  return (
    <div className="container" style={mystyle}>
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#1e915b" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            style={mystyle}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils give you a way to analyze your text quicly and
              efficiently,Used it for word count, character count or ...
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={mystyle}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils is a free character tool that provides instant character
              count & word count statistics for a given text.TextUtils reports
              the number of words and characters.This it is suitable for writing
              text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            style={mystyle}
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to
              count characters in facebook, Blogs, Books ,excel document, pdf
              document,easst=ys, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-2 ">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary "
        >
          {btntext}
        </button>
      </div> */}
      {/* this button is for learning  */}
    </div>
  );
}
