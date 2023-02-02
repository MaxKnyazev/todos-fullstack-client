import './TodoForm.scss';

function TodoForm() {
  return (
    <section className="todo__form form">
      <input placeholder="add todo..." type="text" className="form__input" />
      <button className="form__button">Submit</button>
    </section>
  );
}

export default TodoForm;
