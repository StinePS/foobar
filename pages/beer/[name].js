import { ChevronLeftIcon } from "@heroicons/react/solid";
import { getBeers } from "../../libs/beers";
import Link from "next/link";
import Image from "next/image";

// Define paths that can be accessed using getStaticPaths
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  const data = await getBeers();
  return {
    paths: data.map((beer) => ({
      params: {
        name: beer.name,
      },
    })),
    fallback: false,
  };
}

// Fetch the static data for our path, thus avoiding ever giving "Loading... message"
export async function getStaticProps({ params }) {
  const data = await getBeers();
  const current = data.find((beer) => beer.name == params.name);
  return {
    props: { current },
    notFound: !current,
  };
}

// Create a page based on the current beer's name with additional info about the beer (aroma, mouthfeel and so on)
export default function Beer({ current }) {
  return (
    <div className="App">
      <main>
        <section className="sec-bg rounded-corners">
          <div className="margin-bottom">
            {" "}
            <Link href={"/showproducts"}>
              <a className="txt-strong hover-me">
                <ChevronLeftIcon className="chevron-size margin-right txt-strong" />
                Back to menu
              </a>
            </Link>
          </div>

          <div className="grid-1-3">
            <div className="description">
              <Image src={`/images/${current.label}`} alt={`${current.name} - A lovely beer`} width={250} height={250} />
              <p className="txt-strong">{current.category}</p>
              <p>{`Alcohol: ${current.alc}%`}</p>
            </div>
            <div className="description">
              <h1 className="header">{current.name}</h1>
              <p className="txt-cursive">&#34;{current.description.overallImpression}&#34;</p>
              <h2>Aroma</h2>
              <p>{current.description.aroma}</p>
              <h2>Apperance</h2>
              <p>{current.description.appearance}</p>
              <h2>Flavor</h2>
              <p>{current.description.flavor}</p>
              <h2>Mouthfeel</h2>
              <p>{current.description.mouthfeel}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
