import './Login.scss';

function Login() {
  return (
    <section className="login form">
      <h1 className="login__title">Login</h1>
      <input placeholder="email or nickname" type="text" className="login__input form__input" />
      <input placeholder="password" type="text" className="login__input form__input" />
      <button className="login__button form__button">Submit</button>
    </section>
  );
}

export default Login;
