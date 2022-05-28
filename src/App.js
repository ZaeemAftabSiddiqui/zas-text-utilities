import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//https://wordcounter.net/ just like these sites
//https://www.online-utility.org/text/analyzer.jsp
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container my -3">
        <TextForm heading="Enter your text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
