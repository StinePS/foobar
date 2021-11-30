const Dashboard = ({ name, bio }) => (
  <>
    <h2>{name}</h2>
    <p>{`Bio: ${bio}`}</p>
  </>
);

Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/stineps");
  const user = await res.json();

  return user;
};
export default Dashboard;
