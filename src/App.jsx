import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  let todoData = [];

  const [todoItems, setTodoItems] = useState(todoData);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      { todoName: itemName, todoDate: itemDate },
      ...todoItems,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(updatedTodoItems);
    // console.log(todoItems);
    // console.log(todoItemName);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <h2>Enjoy Your Day.</h2>}
      <TodoItems
        todoData={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
