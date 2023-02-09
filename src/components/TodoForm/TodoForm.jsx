import './TodoForm.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAddAsync } from '../../store/storeThunk/todo/actionCreaters'

function TodoForm() {
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  const buttonHandler = () => {
    console.log(12312312);
    console.log(inputValue);
    dispatch(todoAddAsync(inputValue));
  }

  return (
    <section className="todo__form form">
      <input onChange={inputHandler} placeholder="add todo..." type="text" className="form__input" value={inputValue} />
      <button onClick={buttonHandler} className="form__button">Submit</button>
    </section>
  );
}

export default TodoForm;
