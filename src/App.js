import "./App.css";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//https://wordcounter.net/ just like these sites
//https://www.online-utility.org/text/analyzer.jsp
function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09492b";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // this is to blink title
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my -3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtiles - Word Counter, Character to word counter,Remove extra spaces"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
