import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItems></TodoItems>
        <TodoItems></TodoItems>
        <TodoItems></TodoItems>
      </div>
    </center>
  );
}

export default App;
