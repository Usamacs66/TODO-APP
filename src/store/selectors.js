export const getTodoList =  (store) => store.TodoList;

export const getTodoById = (store,id) => ({...store.Todo[id],id});

export const getTodos = (store) => getTodoList(store).map((id)=>getTodoById(store,id));

//export const deleteTodoById = (store,deletedId) => {
//    let allTodos =  getTodos(store).map((data)=> { if(data.id !== deletedId) {return data}},[]).filter(notUndefined => notUndefined !== undefined);
//     let remainingTodos =  allTodos.reduce(function(obj, data, i) {
//         let id = data.id;
//         delete data.id;
//         obj[id] = data;
//         return obj;
//       }, {});
//       return remainingTodos;
// let allTodos = Object.assign({},store.Todo);
// delete allTodos[deletedId];
// return allTodos;
//}