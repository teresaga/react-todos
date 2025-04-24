import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDesc: 'Cook meal', rowAssigned: 'María'},
    {rowNumber: 2, rowDesc: 'Clean house', rowAssigned: 'Jose'},
    {rowNumber: 3, rowDesc: 'Finish homework', rowAssigned: 'Karla'},
    {rowNumber: 4, rowDesc: 'Feed pets', rowAssigned: 'Jose'}
  ];
  
  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length+1,
        rowDesc: 'New Todo',
        rowAssigned: 'New User'
      };
      todos.push(newTodo);
      console.log(todos);
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
        </div>
      </div>
    </div>
  );
}

export default App;
