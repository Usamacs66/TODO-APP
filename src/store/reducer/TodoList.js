export const TodoList = (state=[],action) =>{
    switch(action.type){
        case "add-todo":{
            const {id} = action.payload;
      return [...state,id];
    }
    case "delete-todo":{
          const {id} = action.payload;
          const indexToRemove = state.indexOf(id);
          const result = [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
    return result;
  }
      default:
      return state;
    }
}