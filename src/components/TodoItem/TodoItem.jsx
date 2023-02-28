import './TodoItem.scss';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { 
  todoDeleteAsync, 
  todoToggleDoneAsync, 
  todoToggleImportantAsync,
  todoToggleChangeAsync,
  todoChangeTitleAsync,
} from '../../store/storeThunk/todo/actionCreaters'

function TodoItem({isDone = false, isImportant = false, isChange = false, title = 'test', id}) {
  const [ inputValue, setInputValue ] = useState(title);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  const buttonDeleteHandler = () => {
    dispatch(todoDeleteAsync(id))
  }

  const buttonDoneHandler = () => {
    dispatch(todoToggleDoneAsync(id));
  }

  const buttonImportantHandler = () => {
    dispatch(todoToggleImportantAsync(id))
  }

  const buttonChangeHandler = (e) => {
    dispatch(todoToggleChangeAsync(id))

    if (!isChange) {
      // TODO: Костыль!!!!!!!
      setTimeout(() => {
        inputRef.current.focus();
      }, 0)
    } else {
      dispatch(todoChangeTitleAsync(inputValue, id))
    }
  }

  let itemClasses = 'todo__item item';
  itemClasses += isDone ? ' item--done' : '';
  itemClasses += isImportant ? ' item--important' : '';
  itemClasses += isChange ? ' item--change' : '';

  return (
    <li className={itemClasses}>
      {
        isDone ? (
          <button onClick={buttonDoneHandler} className="item__button item__button--done">&#10004;</button>
          ) : (
          <button onClick={buttonDoneHandler} className="item__button item__button--done">&#10008;</button>
        )
      }

      {
        isChange ? (
          <input onBlur={buttonChangeHandler} ref={inputRef} onChange={inputHandler} className="item__form" type="text" value={inputValue} />
          ) : (
          <span onClick={buttonChangeHandler} className="item__title">{title}</span>
        )
      }

      <div className="item__wrapper">
        {
          isImportant ? (
            <button onClick={buttonImportantHandler} className="item__button item__button--important">	&#9873;</button>
            ) : (
              <button onClick={buttonImportantHandler} className="item__button item__button--important">	&#9872;</button>
          )
        }
        <button onClick={buttonChangeHandler} className="item__button item__button--change">&#9998;</button>
        <button onClick={buttonDeleteHandler} className="item__button item__button--delete">&#10006;</button>
      </div>
    </li>
  );
}

export default TodoItem;
