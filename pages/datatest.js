const GitHubData = ({ user }) => (
  <>
    <h2>{user.name}</h2>
    <p>{`Bio: ${user.bio}`}</p>
  </>
);

GitHubData.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/stineps");
  const user = await res.json();

  return { user };
};

export default GitHubData;
