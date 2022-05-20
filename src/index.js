import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Animate from "./Components/frameAnimate/Animate";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ReactFacts from "./Components/react-fun-facts/ReactFacts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="links container">
        <Link
          to="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {" "}
          React Fun Facts
        </Link>
        <Link
          to="/CatFacts"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Cats Facts
        </Link>
        <Link
          to="/modal"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Framer Motion Modal Animation
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ReactFacts />} />
        <Route path="/CatFacts" element={<App />} />
        <Route path="/modal" element={<Animate />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
