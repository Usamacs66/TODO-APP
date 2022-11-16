import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/action/toggleTodo";
import { deleteTodo } from "../../store/action/deleteTodo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      <div className="form-check w-100">
        <label className="form-check-label">
          <i className="input-helper"></i>
          {todo && todo.completed ? "✅" : "🔴"}{" "}
          <span>
            {todo.content}
          </span>
        </label>
        <button type="button" className="btn" onClick={()=>dispatch(deleteTodo(todo.id))} >Delete</button>
      </div>
    </li>
    </>
  );
};

export default Todo;
