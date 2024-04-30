import React, { useState } from "react";
import "./serie.css";

function Serie({ data, nom }) {
  const [showCount, setShowCount] = useState(3);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <>
      <section className="cards">
        <h2>Series</h2>
        <div className="Series">
          {data
            .filter(
              (element) =>
                element.Nom.toLowerCase().includes(nom.toLowerCase()) ||
                element.Nom === ""
            )
            .slice(0, showCount)
            .map((serie) => (
              <div className="card" key={serie.id}>
                <h3>{serie.Nom}</h3>
                <img src={serie.image} alt={serie.Nom} />
                <p>{serie.description}</p>
              </div>
            ))}
        </div>
      </section>
      <div className="container-sm">
        {showCount < data.length && (
          <button className="btn" onClick={handleShowMore}>
            Voir plus
          </button>
        )}
      </div>
    </>
  );
}

export default Serie;
