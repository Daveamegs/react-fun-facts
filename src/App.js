import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [facts, setFacts] = useState("");

  const getFacts = () => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      setFacts(response.data.fact);
    });
  };

  // console.log(getFacts());
  return (
    <div className="App">
      <div className="App-header">
        <h2 className="facts__title">Amazing Facts about Cats</h2>
        {/* <h4>Click the Button Below to get random facts about Cats</h4> */}

        <div className="facts__display">{facts}</div>
        <button className="get__facts--btn" onClick={getFacts}>
          Get Cat Fact
        </button>
      </div>
    </div>
  );
}

export default App;
