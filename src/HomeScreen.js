import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row title="game" banner="Netflix Originals" />
      <Row title="science" banner="Science FIction" />
      <Row title="action" banner="Action" />
    </div>
  );
}

export default HomeScreen;
