import './TodoItem.scss';
import { useState } from 'react';

function TodoItem({isDone = false, isImportant = false, isChange = false, title = 'test'}) {
  const [ inputValue, setInputValue ] = useState(title);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  let itemClasses = 'todo__item item';
  itemClasses += isDone ? ' item--done' : '';
  itemClasses += isImportant ? ' item--important' : '';
  itemClasses += isChange ? ' item--change' : '';

  return (
    <li className={itemClasses}>
      {
        isDone ? (
          <button className="item__button item__button--done">&#10004;</button>
          ) : (
          <button className="item__button item__button--done">&#10008;</button>
        )
      }

      {
        isChange ? (
          <input onChange={inputHandler} className="item__form" type="text" value={inputValue} />
          ) : (
          <span className="item__title">{title}</span>
        )
      }

      <div className="item__wrapper">
        {
          isImportant ? (
            <button className="item__button item__button--important">	&#9873;</button>
            ) : (
              <button className="item__button item__button--important">	&#9872;</button>
          )
        }
        <button className="item__button item__button--change">&#9998;</button>
        <button className="item__button item__button--delete">&#10006;</button>
      </div>
    </li>
  );
}

export default TodoItem;
