import './App.scss';
import Header from '../Header';
import Todo from '../Todo';
import Registration from '../Registration';
import Login from '../Login';
import NotFound from '../NotFound';
import Admin from '../Admin';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodosAsync } from '../../store/storeThunk/todo/actionCreaters'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodosAsync());
  }, [dispatch])

  return (
    <div className="App">
      <Header />

      <Todo />
    </div>
  );
}

// <Header />

// <Todo />
// <Registration />
// <Login />
// <NotFound />
// <Admin />

export default App;
