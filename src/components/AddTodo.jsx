import { useContext, useRef} from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {

  const todoName = useRef();
  const todoDate = useRef();

  const {addNewItem} = useContext(TodoItemsContext)

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoNameCurr =todoName.current.value;
    const todoDateCurr =todoDate.current.value;

    todoName.current.value = '';
    todoDate.current.value = '';
  
    addNewItem(todoNameCurr, todoDateCurr);
  };
  return (
    <div className="container text-center">
      <form className="row cRow"
      onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoName}

          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" 
          ref={todoDate}

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
