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
       <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
       <input type='button' onClick={Add} value='Add TODO' />
    </>
   )
}
export default Add;