import TodoItem from "./TodoItem";

function TodoItems({ todoData }) {
  return (
    <center className="todo-container">
      {todoData.map((item) => (
        <TodoItem todoName={item.todoName} todoDate={item.todoDate}></TodoItem>
      ))}
    </center>
  );
}

export default TodoItems;
