export const TodoList = (state=[],action) =>{
    switch(action.type){
        case "add-todo":{
            const {id} = action.payload;
      return [...state,id];
    }
      default:
      return state;
    }
}