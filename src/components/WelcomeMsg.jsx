import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const {todoItems} = useContext(TodoItemsContext);
 

  return todoItems.length === 0 && <h2>Enjoy Your Day.</h2>;
};

export default WelcomeMsg;
