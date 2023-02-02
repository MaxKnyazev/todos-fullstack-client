import './Registration.scss';

function Registration() {
  return (
    <section className="registration form">
      <h1 className="registration__title">Registration</h1>
      <input placeholder="email" type="text" className="registration__input form__input" />
      <span className="registration__error"></span>
      <input placeholder="nickname" type="text" className="registration__input form__input" />
      <input placeholder="password" type="text" className="registration__input form__input" />
      <input placeholder="repeat password" type="text" className="registration__input form__input" />
      <button className="registration__button form__button">Submit</button>
    </section>
  );
}

export default Registration;
