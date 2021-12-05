import useBeers from "../hooks/useBeers";

export default function BeersTonight() {
  const { data, error } = useBeers();
  if (!data) return <div>Loading...</div>;
  if (error) return <div>An error has occured...</div>;

  return (
    <div>
      {data.map((beer) => (
        <article key={beer.name}>
          <h3>{beer.name}</h3>
        </article>
      ))}
    </div>
  );
}
