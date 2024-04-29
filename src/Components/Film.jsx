function Film({ data }) {
  return (
    <div>
      <h3>{data[0].Nom}</h3>
      <p>{data[0].description}</p>
      <img src={data[0].image} alt={data[0].Nom} />
      <p>{data[0].dateDeSortie}</p>
    </div>
  );
}

export default Film;
