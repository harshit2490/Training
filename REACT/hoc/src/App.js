import "./App.css";
//import UsersList from "./UsersList";
import SearchUsers from "./UsersList";
// import TodoList from "./TodoList";
import SearchTodos from "./TodoList";
function App() {
  return (
    <div className="App">
      <div className="section">
        <div>
          <h2>Users</h2>
          <SearchUsers />
        </div>
        <div>
          <h2>To Do List</h2>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
