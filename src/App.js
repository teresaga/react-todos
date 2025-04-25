import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDesc: 'Cook meal', rowAssigned: 'María'},
    {rowNumber: 2, rowDesc: 'Clean house', rowAssigned: 'Jose'},
    {rowNumber: 3, rowDesc: 'Finish homework', rowAssigned: 'Karla'},
    {rowNumber: 4, rowDesc: 'Feed pets', rowAssigned: 'Jose'}
  ]);
  
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1] + 1;
      const newTodo = {
        rowNumber: rowNumber,
        rowDesc: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    }
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
