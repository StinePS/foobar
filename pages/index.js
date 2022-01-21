import Bartenders from "../components/Bartenders";
import BeersTonight from "../components/BeersTonight";
import Favourites from "../components/Favourites";
import NowPrepping from "../components/NowPrepping";
import NowServing from "../components/NowServing";
import useDashboardDetails from "../hooks/useDashboardDetails";

function Loading() {
  return (
    <div>
      <h2 className="center">Loading...</h2>
    </div>
  );
}

export default function Dashboard() {
  const { data } = useDashboardDetails();

  return (
    <div>
      <main>
        <section className="grid-2-mobile">
          <div className="column sec-bg rounded-corners">
            <h2 className="center header">Now serving</h2>
            {data ? <NowServing serving={data.serving} /> : <Loading />}
          </div>

          <div className="column sec-bg rounded-corners">
            <h2 className="center header">Now prepping</h2>
            {data ? <NowPrepping serving={data.queue} /> : <Loading />}
          </div>
        </section>

        <section className="sec-bg rounded-corners">
          <h2 className="center header">Currently on tap</h2>
          <BeersTonight />
        </section>

        <section>
          <div className="grid-2">
            <div className="column sec-bg rounded-corners">
              <h2 className="center header">Our amazing crew</h2>
              {data ? <Bartenders bartenders={data.bartenders} /> : <Loading />}
            </div>

            <div className="column sec-bg rounded-corners">
              <h2 className="center header">Popular right now</h2>
              <Favourites />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
