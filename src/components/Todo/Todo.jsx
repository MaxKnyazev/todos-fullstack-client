import './Todo.scss';
import TodoDisplay from '../TodoDisplay';
import TodoForm from '../TodoForm';

function Todo() {
  return (
    <section className="todo">
      <TodoForm />
      <TodoDisplay />
    </section>
  );
}

export default Todo;
