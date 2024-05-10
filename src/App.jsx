import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  let todoData = [];

  const [todoItems, setTodoItems] = useState(todoData);

  // const handleNewItem = (itemName, itemDate) => {
  //     setTodoItems((currValue) => {     
  //       const newTodoItems = [
  //         { todoName: itemName, todoDate: itemDate },
  //         ...currValue,
  //      ];
  //      return newTodoItems;
  //     });
  // };

  const handleNewItem = (itemName, itemDate) => {

  setTodoItems((currValue) => [
        { todoName: itemName, todoDate: itemDate },
        ...currValue,
     ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(updatedTodoItems);
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
