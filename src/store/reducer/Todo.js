export const Todo = (state={},action) =>{
    switch(action.type){
        case "add-todo":
            const { id, content } = action.payload;
      return {
        ...state,
        [id]: {
          content,
          completed: false
        }
      };
      case 'toggle-todo': {
        const { id } = action.payload;
        const currentTodo = state[id];
        return {
          ...state,
          [id]: { ...currentTodo, completed: !currentTodo.completed }
        };
      }
      case 'delete-todo': {
        const {id} = action.payload;
       let todos = Object.assign({},state);
      delete todos[id];
      return todos;
      }
      default:
      return state;
    }
}