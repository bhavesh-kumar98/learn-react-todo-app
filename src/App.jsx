import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";

import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDate) => {
  //     setTodoItems((currValue) => {
  //       const newTodoItems = [
  //         { todoName: itemName, todoDate: itemDate },
  //         ...currValue,
  //      ];
  //      return newTodoItems;
  //     });
  // };

  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currValue) => [
      { todoName: itemName, todoDate: itemDate },
      ...currValue,
    ]);
  };

  const deleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <TodoItemsContext.Provider 
      value={{
        todoItems,
        addNewItem,
        deleteItem,
        }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
