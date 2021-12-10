import Head from "next/head";
import Bartenders from "../components/Bartenders";
import BeersTonight from "../components/BeersTonight";
import Countdown from "../components/Countdown";
import NowPrepping from "../components/NowPrepping";
import NowServing from "../components/NowServing";
import useDashboardDetails from "../hooks/useDashboardDetails";

export default function Dashboard() {
  const { data, error } = useDashboardDetails();

  return (
    <div>
      <Head>
        <title>Foobar</title>
        <meta name="description" content="A school project" />
      </Head>
      {!data ? <div>Loading...</div> : null}
      {data ? (
        <main>
          <h1 className="center">Foobar</h1>
          <Countdown />
          <section className="grid-2-mobile">
            <div className="column sec-bg">
              <h2 className="center">Now serving</h2>
              <div className="flex-wrap">
                <NowServing serving={data.serving} />
              </div>
            </div>

            <div className="column sec-bg">
              <h2 className="center">Now prepping</h2>
              <div className="flex-wrap">
                <NowPrepping queue={data.queue} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="center">Our beers tonight</h2>
            <BeersTonight />
          </section>

          <section>
            <div className="grid-2">
              <div className="column">
                <h2 className="center">Our amazing crew</h2>
                <Bartenders bartenders={data.bartenders} />
              </div>
              <div className="column">
                <h2 className="center">Favourites</h2>
                <div className="flex-justify">
                  <h3>Sleighride</h3>
                  <h3>Ruined childhood</h3>
                  <h3>Steampunk</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : null}
    </div>
  );
}
