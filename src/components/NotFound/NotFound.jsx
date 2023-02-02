import './NotFound.scss';

function NotFound() {
  return (
    <section className="notFound">
      <h1 className="notFound__title">Error 404</h1>
      <span className="notFound__span">Page not found :(</span>
      <button className="notFound__button">Back home</button>
    </section>
  );
}

export default NotFound;
