import "./App.css";
import { useState } from "react";
import Alert from "./Components/Alert";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my -3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze below"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
