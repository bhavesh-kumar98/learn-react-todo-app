import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems() {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <center className="todo-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.todoName}
          todoDate={item.todoDate}
        ></TodoItem>
      ))}
    </center>
  );
}

export default TodoItems;
