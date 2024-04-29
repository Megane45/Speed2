import { useState } from "react";
import NavBar from "./Components/NavBar";
import Film from "./Components/Film";
import films from "./Data/films";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Film data={films} />
    </>
  );
}

export default App;
