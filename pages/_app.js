import "../sass/main.scss";
import "react-credit-cards/lib/styles.scss";
import Nav from "../components/Nav.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
