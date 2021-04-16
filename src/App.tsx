import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './models/Todo';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodo = (text: string) => {
    setTodos([...todos, {id: Math.random().toString(), text: text}])
  }

  return (
    
    <div className="App" >
      <NewTodo onAddTodo={AddTodo}/>
      <TodoList items={todos}/>
    </div >
  )
}

export default App;
