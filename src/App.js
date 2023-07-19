import { Tabs } from "./components/tabs/tabs";
//import { Descriptions } from "./components/descriptions/descriptions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="header">
        <h1>More About Us</h1>
        <hr />
        <p>Click the tab buttons to learn more</p>
      </section>
      <div className="tab-section">
        <section className="tabs">
          <Tabs />
        </section>
      </div>
    </div>
  );
}

export default App;
