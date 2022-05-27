import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//https://wordcounter.net/
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container my -3">
        <TextForm heading="Enter your text to analyze below" />
      </div>
    </>
  );
}

export default App;
