import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './Slices/TodoSlice';

const Store = configureStore({
    reducer:{
        todos: todosReducer
    }
});
export default Store;