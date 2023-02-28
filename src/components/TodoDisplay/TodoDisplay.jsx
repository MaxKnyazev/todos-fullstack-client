import './TodoDisplay.scss';
import TodoList from '../TodoList';
import { useSelector } from 'react-redux';

function TodoDisplay() {
  const isLoading = useSelector(state => state.todoReducer.isLoading);
  console.log(isLoading);
  return (
    <section className="todo__display">
      {
        isLoading 
        ? <h1>Loading...</h1>
        : <TodoList />
      }
    </section>
  );
}

export default TodoDisplay;
