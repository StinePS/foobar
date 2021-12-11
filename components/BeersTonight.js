import Image from "next/image";
import useBeers from "../hooks/useBeers";

// function generateImagePath(name) {
//   const lowerName = name.toLowerCase().replaceAll(" ", "");
//   const namePath = `/images/${lowerName}.jpg`;
//   return namePath;
// }

// function imagePath(label) {
//   const beerPath = `/images/${beer.label}.png`;
//   return beerPath;
// }

export default function BeersTonight() {
  const { data, error } = useBeers();
  if (!data) return <div>Loading...</div>;
  if (error) return <div>An error has occured...</div>;

  return (
    <div className="grid-2">
      {data.map((beer) => (
        <article key={beer.name}>
          <Image src={`/images/${beer.label}`} alt={`${beer.name} - A lovely beer`} width={150} height={150} />
          <h3>{beer.name}</h3>
        </article>
      ))}
    </div>
  );
}
