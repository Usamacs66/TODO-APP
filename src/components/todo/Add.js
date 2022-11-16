import {React,useState} from "react"; 
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/action/addTodo";
const Add = (prop)=>{

    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    const Add = ()=>{
      dispatch(addTodo(value));
      setValue("");
    }
   return(
    <>
      <div className="add-items d-flex"> 
         <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="form-control todo-list-input" placeholder="What do you need to do today?" /> 
         <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={Add}>Add</button> 
      </div>
    </>
   )
}
export default Add;