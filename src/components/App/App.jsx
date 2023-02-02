import './App.scss';
import Header from '../Header';
import Todo from '../Todo';
import Registration from '../Registration';
import Login from '../Login';
import NotFound from '../NotFound';
import Admin from '../Admin';

function App() {
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
