import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // error throw
      return;
    }

    todosCtx.addTodo(enteredText)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>add todo</button>
    </form>
  );
};

export default NewTodo;
