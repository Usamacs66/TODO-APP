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
      default:
      return state;
    }
}