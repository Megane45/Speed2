import React, { useState } from "react";
import "./film.css";

function Film({ data, nom }) {
  const [showCount, setShowCount] = useState(3);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <>
      <section className="cards">
        <h2>Films</h2>
        <div className="Films">
          {data
            .filter(
              (element) =>
                element.Nom.toLowerCase().includes(nom.toLowerCase()) ||
                element.Nom === ""
            )
            .slice(0, showCount)
            .map((film) => (
              <div className="card" key={film.id}>
                <h3>{film.Nom}</h3>
                <img src={film.image} alt={film.Nom} />
                <p>{film.description}</p>
                <p>{film.dateDeSortie}</p>
              </div>
            ))}
        </div>
      </section>
      {showCount < data.length && (
        <button className="btn" onClick={handleShowMore}>
          Voir plus
        </button>
      )}
    </>
  );
}

export default Film;
