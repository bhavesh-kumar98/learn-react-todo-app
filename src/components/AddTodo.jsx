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
    onNewItem(todoName, todoDate);
    setTodoName('');
    setTodoDate('');
  };
  return (
    <div className="container text-center">
      <div className="row cRow">
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
            type="button"
            className="btn btn-success cBtn"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
