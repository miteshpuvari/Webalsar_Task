import React from "react";
import "./App.css";

import HomeScreen from "./Screnn/HomeScreen";
import Todo from "./Components/Todo";
import Navigation from "./Routing/Navigation";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>
    </>
  );
}

export default App;
