export const deleteTodo = id => ({
    type: 'delete-todo',
    payload: { id:id}
  });

  //, content: deleteTodoById(store.getState(),id) 