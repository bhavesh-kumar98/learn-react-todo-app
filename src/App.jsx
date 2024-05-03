import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  let todoData = [
    {
      todoName: "Milk",
      todoDate: "1/1/2024",
    },
    {
      todoName: "ButterMilk",
      todoDate: "2/1/2024",
    },
    {
      todoName: "Dal",
      todoDate: "3/1/2024",
    },
    {
      todoName: "Ghee",
      todoDate: "4/1/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoData={todoData}></TodoItems>
    </center>
  );
}

export default App;
