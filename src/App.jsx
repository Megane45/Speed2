import { useState } from "react";
import NavBar from "./Components/NavBar";
import Film from "./Components/Film";
import films from "./Data/films";

import "./App.css";

function App() {
  const [nom, setNom] = useState("");

  return (
    <>
      <NavBar data={films} nom={nom} setNom={setNom} />
      <Film data={films} nom={nom} setNom={setNom} />
    </>
  );
}

export default App;
