const Login = () => {
  return (
    <main>
      <section>
        <form action="/admin" method="POST">
          <div className="sec-bg rounded-corners">
            <h1 className="header page-header center">Login</h1>
            <div className="grid-2">
              <div className="column">
                <fieldset>
                  <label htmlFor="username">Username</label>
                  <input className="form-input" name="username" id="username" type="text" placeholder="admin" required />
                </fieldset>
              </div>
              <div className="column">
                <fieldset>
                  <label htmlFor="password">Password</label>
                  <input className="form-input" name="password" id="password" type="password" placeholder="******" required />
                </fieldset>
              </div>
            </div>

            <div className="btn-container center">
              <button className="btn" type="submit">
                Log in
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
