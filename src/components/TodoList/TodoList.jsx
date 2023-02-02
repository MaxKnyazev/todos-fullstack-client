import './TodoList.scss';
import TodoItem from '../TodoItem';

function TodoList() {
  return (
    <ul className="todo__list">

      <TodoItem isImportant={true} />
      <TodoItem isImportant={true} />
      <TodoItem />
      <TodoItem />
      <TodoItem isImportant={true} isDone={true}/>
      <TodoItem isImportant={true} isDone={true}/>
      <TodoItem isDone={true}/>
      <TodoItem isDone={true}/>
      

    </ul>
  );
}

export default TodoList;
