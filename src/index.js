import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SelectColorCorrect from './SelectColorCorrect';
import MemoryGame from './MemoryGame';
import Pagination from './Pagination';
import Corousal from './Corousal';
import { Timer } from './Timer';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import AddSubmit from './AddSubmit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/selectcolorcorrect",
    element: <SelectColorCorrect/>,
  },
  {
    path: "/memorygame",
    element: <MemoryGame/>,
  },
  {
    path: "/pagination",
    element: <Pagination/>,
  },
  {
    path: "/corousal",
    element: <Corousal/>,
  },
  {
    path: "/timer",
    element: <Timer/>,
  },
  {
    path: "/todoapp",
    element: <TodoApp/>,
  },
  {
    path: "/addsubmit",
    element: <AddSubmit/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>

    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
