import './TodoForm.scss';
import { useState } from 'react';

function TodoForm() {
  const { value, setValue } = useState('');
  return (
    <section className="todo__form form">
      <input placeholder="add todo..." type="text" className="form__input" value={value} />
      <button className="form__button">Submit</button>
    </section>
  );
}

export default TodoForm;
