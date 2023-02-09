import './TodoList.scss';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state.todoReducer.todos)
  return (
    <ul className="todo__list">
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} isImportant={todo.isImportant} isDone={todo.isDone} isChange={todo.isChange}/>
        ))
      }
    </ul>
  );
}

export default TodoList;