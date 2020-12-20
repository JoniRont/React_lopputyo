import './App.css';
import Fetch from './Fetch';
import PrintJokes from './PrintJokes';
import React from "react";

function App() {
  return (
    <div id="main">
      <h1 className="header"> Chuck Norris</h1>
      <p className="intro">
        Chuck Norris vitsigeneraattori. Voit valita halutun kategorian sekä vitsien määrän (1-10), sekä antaa haluttu etu- ja sukunimi.
      </p>
      <Fetch />
      <PrintJokes />
    </div>
  );
}

export default App;
