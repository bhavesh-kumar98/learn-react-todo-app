import TodoItem from "./TodoItem";

function TodoItems({ todoData,  onDeleteClick}) {
  return (
    <center className="todo-container">
      {todoData.map((item) => (
        <TodoItem todoName={item.todoName} todoDate={item.todoDate}
        onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </center>
  );
}

export default TodoItems;
