import { useState } from "react";
import NavBar from "./Components/NavBar";
import Film from "./Components/Film";
import films from "./Data/films";
import Serie from "./Components/Serie";
import serie from "./Data/serie";

import "./App.css";

function App() {
  const [nom, setNom] = useState("");

  return (
    <>
      <NavBar data={films} nom={nom} setNom={setNom} />
      <Film data={films} nom={nom} setNom={setNom} />
      <Serie data={serie} nom={nom} setNom={setNom} />
    </>
  );
}

export default App;
