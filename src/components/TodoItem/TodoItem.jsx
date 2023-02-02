import './TodoItem.scss';

function TodoItem({isDone = false, isImportant = false, isChange = false}) {
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

      <span className="item__title">Something to do...</span>

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
