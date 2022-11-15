
let count=0;
export const addTodo = (data)=>({
type:"add-todo",
payload : {
    id:++count,
    content:data
}
});