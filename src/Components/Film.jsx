import "./film.css";
function Film({ data }) {
  return (
    <section className="card">
      <h2>Films</h2>
      <div className="Films">
        <h3>{data[0].Nom}</h3>
        <img src={data[0].image} alt={data[0].Nom} />
        <p>{data[0].description}</p>

        <p>{data[0].dateDeSortie}</p>
      </div>
    </section>
  );
}

export default Film;
