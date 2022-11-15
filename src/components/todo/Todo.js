import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/action/toggleTodo";
//import { deleteTodo } from "../../store/action/deleteTodo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? "✅" : "🔴"}{" "}
      <span>
        {todo.content}
      </span>
    </li>
    <button type="button" onClick={()=> console.log(todo.id)} >Delete todo</button>
    </>
  );
};

export default Todo;
