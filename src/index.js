import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SelectColorCorrect from './SelectColorCorrect';
import MemoryGame from './MemoryGame';
import Pagination from './Pagination';
import Corousal from './Corousal';

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
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
