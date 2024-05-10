import { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName('');
    setTodoDate('');
  };
  return (
    <div className="container text-center">
      <form className="row cRow"
      onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" 
          value={todoDate} 
          onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success cBtn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
