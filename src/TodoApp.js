import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Provider} from 'react-redux';
import { addTodo, removeAll, removeTodo } from "./utils/Slices/TodoSlice";
import Store from "./utils/Store";
// import Store from "./utils/Store";

const TodoApp = ()=>{
    // const [count,setCount] = useState(0);
    const todoItems = useSelector((store)=>store.todos.items);
    console.log(todoItems)

    const dispatch = useDispatch();
    const handleAdd = ()=>{
        dispatch(addTodo("hey bro"))
    }
    const handleDelete = ()=>{
        dispatch(removeTodo())
    }
    const handleDeleteAll=()=>{
        dispatch(removeAll())
    }
    return(
        <Provider store={Store}>
        <div className="flex flex-col border-2 border-black h-screen items-center justify-center ">
            <h1>Todo</h1>
            <div className="todoContainer border-blue-500 border-2 w-1/2 h-1/2">
                <div className="newTodo flex mb-5">
                    <input className="w-3/4 border-2 border-blue-300"/>
                    <button onClick={handleAdd}>Add</button>
                </div>
                
                <div className="singleTodo flex flex-row p-2 border-2 border-violet-400 ">
                    <div className="todoData w-3/4">Number of Todos: {todoItems.length}</div>
                    <button onClick={handleDelete}>delete</button>
                </div>
                <button onClick={handleDeleteAll}>deleteAll</button>
            </div>
        </div>
        </Provider>
    )
}
export default TodoApp;