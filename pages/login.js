import { useRouter } from "next/router";

// Login made with inspiration from Lee Robinson - https://www.youtube.com/watch?v=ERUHYh_65F4&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR&index=4
const Login = () => {
  const router = useRouter();

  const onLogin = (e) => {
    e.preventDefault();

    router.push("/");
  };

  return (
    <>
      <input placeholder="User name" />
      <input placeholder="Password" type="password" />
      <button onClick={onLogin} type="button">
        Log in
      </button>
    </>
  );
};

export default Login;
