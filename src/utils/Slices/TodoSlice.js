import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: {items : ["abc"]},
    reducers:{
        addTodo: (state, action)=>{
            state.items.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.items.pop()
        },
         removeAll: (state)=>{
            state.items.length = 0;
        }
    }
})

export const {addTodo,removeTodo,removeAll} = todoSlice.actions;  
export default todoSlice.reducer;