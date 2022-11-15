export const getTodoList =  (store) => store.TodoList;

export const getTodoById = (store,id) => ({...store.Todo[id],id});

export const getTodos = (store) => getTodoList(store).map((id)=>getTodoById(store,id));

// export const deleteTodoById = (store,deletedId) => {
//     getTodos(store).map((id)=> id !== deletedId)
// }