import bodyParser from "body-parser";
import CurrentStock from "../components/CurrentStock";
import Link from "next/link";
import useDashboardDetails from "../hooks/useDashboardDetails";
import util from "util";

// Logging in
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// https://dev.to/smeijer/handling-post-requests-in-next-js-getserversideprops-50ia

const getBody = util.promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {
  await getBody(req, res);
  const { username, password } = req.body ?? {};

  return {
    props: {
      isAdmin: username === "admin" && password === "123456",
    },
  };
}

export default function Admin({ isAdmin }) {
  const { data } = useDashboardDetails();
  if (!isAdmin) {
    // Logging in with incorrect username/password
    return (
      <section className="sec-bg rounded-corners">
        <h1 className="page-header center">Incorrect username and/or password</h1>
        <div className="btn-container center">
          <Link href="/login">
            <a className="btn">Try again</a>
          </Link>
        </div>
      </section>
    );
  }
  return (
    // Logging in with correct username & password
    <section className="sec-bg rounded-corners">
      <h1 className="page-header">Welcome admin!</h1>
      <h2 className="center header">Current stock</h2>
      {!data ? (
        <div>
          <h2 className="center">Loading...</h2>
        </div>
      ) : null}

      {data ? (
        <div>
          <CurrentStock storage={data.storage} />
        </div>
      ) : null}
    </section>
  );
}
