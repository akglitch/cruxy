
import './App.css';

import { Nav } from './components/navbar';
import { Todo } from './components/todo';
import { TodoModal } from './components/todoModal';





function App() {
  return (
    <div>
      <Nav />
     <TodoModal />
      <Todo />



    </div>
  );
}

export default App;
