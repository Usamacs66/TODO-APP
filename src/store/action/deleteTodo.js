import { deleteTodoById } from "../selectors";
export const deleteTodo = id => ({
    type: 'delete-todo',
    payload: { id:id }
  });