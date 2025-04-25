import React, { useState } from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Cook meal', rowAssigned: 'María'},
    {rowNumber: 2, rowDescription: 'Clean house', rowAssigned: 'Jose'},
    {rowNumber: 3, rowDescription: 'Finish homework', rowAssigned: 'Karla'},
    {rowNumber: 4, rowDescription: 'Feed pets', rowAssigned: 'Jose'}
  ]);
  
  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber: number): TodoModel[] | null => {
    const filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
    return filtered.length > 0 ? filtered : null;
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">
            { showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          { showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}
