import React from "react"
import { useSelector } from "react-redux"
import { getTodos } from "../../store/selectors";
import Todo from "./Todo";
import { FILTERS } from "../../constants";

const List = ()=>{
const visibilityFilter = useSelector(state => state.visibilityFilter);
const allTodos = useSelector(getTodos);

const todos =
    visibilityFilter === FILTERS.ALL
      ? allTodos
      : visibilityFilter === FILTERS.COMPLETED
      ? allTodos.filter(todo => todo.completed)
      : allTodos.filter(todo => !todo.completed);
      
return(
    
     <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={todo.id} todo={todo}/>;
          })
        : "No todos!"}
    </ul>
    
)
}

export default List;