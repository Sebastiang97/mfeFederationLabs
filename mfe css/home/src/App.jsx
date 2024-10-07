import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
