import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Countries from "./Components/Countries";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;
