import './AdminForm.scss';

function AdminForm() {
  return (
    <section className="admin__form form">
      <input placeholder="user nickname or email..." type="text" className="form__input" />
      <button className="form__button">Search</button>
    </section>
  );
}

export default AdminForm;
