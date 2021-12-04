import Head from "next/head";
import Countdown from "../components/Countdown";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Foobar</title>
        <meta name="description" content="A school project" />
      </Head>

      <main>
        <h1 className="center">Foobar</h1>
        <Countdown />
        <section className="grid-2-mobile">
          <div className="column sec-bg">
            <h2 className="center">Now serving</h2>
            <div className="flex-wrap">
              <p className="terti-bg sec-txt">101</p>
              <p className="terti-bg sec-txt">102</p>
              <p className="terti-bg sec-txt">103</p>
            </div>
          </div>

          <div className="column sec-bg">
            <h2 className="center">Now prepping</h2>
            <div className="flex-wrap">
              <p className="terti-bg sec-txt">104</p>
              <p className="terti-bg sec-txt">105</p>
              <p className="terti-bg sec-txt">106</p>
              <p className="terti-bg sec-txt">107</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="center">Our beers tonight</h2>
          <div className="grid-2">
            <div className="column">
              <p>Beer no. 1</p>
              <p>Beer no. 2</p>
              <p>Beer no. 3</p>
            </div>
            <div className="column">
              <p>Beer no. 4</p>
              <p>Beer no. 5</p>
              <p>Beer no. 6</p>
            </div>
          </div>
          <div className="column"></div>
        </section>

        <section>
          <div className="grid-2">
            <div className="column">
              <h2 className="center">Our amazing crew</h2>
              <div className="flex-justify">
                <p>Jonas</p>
                <p>Peter T.</p>
                <p>Dannie</p>
                <p>Klaus</p>
              </div>
            </div>
            <div className="column">
              <h2 className="center">Favourites</h2>
              <p>Beer no. 3</p>
              <p>Beer no. 7</p>
              <p>Beer no. 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
