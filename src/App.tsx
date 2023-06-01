import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Sheet from "./components/Sheet";
import ScriptName from "./components/ScriptName";

const App = (): JSX.Element => {
  return (
    <div className="App" style={{ textAlign: "left", padding: "3px" }}>
      <ScriptName />
      <hr />
      <Sheet />
    </div>
  );
};

export default App;
