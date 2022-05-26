import "./App.css";

let name = "zaeem";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda
          facilis saepe non iusto cumque ratione, iste voluptates officia!
          Officiis atque blanditiis totam inventore saepe, rem accusantium
          incidunt. Illum, amet?
        </p>
      </div>
    </>
  );
}

export default App;
