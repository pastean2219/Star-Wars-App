import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./pages/People";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      <NavBar />
      <Route path={["/films/:id", "/"]} exact>
        <Home />
      </Route>
      <Route path={"/people/"}>
        <People />
      </Route>
      <Route path={"/vehicle/"}>
        <Vehicles />
      </Route>
    </>
  );
}

export default App;
