import React from "react";
import "./App.css";
import SpinButton from "./components/SpinButton";

function App() {
  return (
    <div className="App">
      <SpinButton type={"성인"}/>
      <SpinButton type={"소아"}/>
      <SpinButton type={"유아"}/>
    </div>
  );
}

export default App;
