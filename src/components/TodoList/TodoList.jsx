import './TodoList.scss';
import TodoItem from '../TodoItem';

const testTodoList = [
  {
    title: 'Learn English',
    isImportant: true,
    isChange: false,
    isDone: false,
  },

  {
    title: 'Learn JavaScript',
    isImportant: true,
    isChange: true,
    isDone: false,
  },

  {
    title: 'Go to gym',
    isImportant: false,
    isChange: false,
    isDone: false,
  },

  {
    title: 'Eat breakfast',
    isImportant: false,
    isChange: true,
    isDone: false,
  },

  {
    title: 'Finish school',
    isImportant: true,
    isChange: false,
    isDone: true,
  },

  {
    title: 'Learn Russian',
    isImportant: true,
    isChange: true,
    isDone: true,
  },

  {
    title: 'Read article',
    isImportant: false,
    isChange: false,
    isDone: true,
  },

  {
    title: 'Read article',
    isImportant: false,
    isChange: false,
    isDone: true,
  },
]

function TodoList() {
  return (
    <ul className="todo__list">

      {
        testTodoList.map((todo) => (
          <TodoItem title={todo.title} isImportant={todo.isImportant} isDone={todo.isDone} isChange={todo.isChange}/>
        ))
      }

      

    </ul>
  );
}

export default TodoList;
