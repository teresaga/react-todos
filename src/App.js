import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDesc: 'Cook meal', rowAssigned: 'María'},
    {rowNumber: 2, rowDesc: 'Clean house', rowAssigned: 'Jose'},
    {rowNumber: 3, rowDesc: 'Finish homework', rowAssigned: 'Karla'}
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
