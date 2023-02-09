import './TodoForm.scss';
import { useState } from 'react';

function TodoForm() {
  const [ inputValue, setInputValue ] = useState('');

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <section className="todo__form form">
      <input onChange={inputHandler} placeholder="add todo..." type="text" className="form__input" value={inputValue} />
      <button className="form__button">Submit</button>
    </section>
  );
}

export default TodoForm;
