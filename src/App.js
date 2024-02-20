import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [currColor, setCurrColor] = useState("#000000");
  const [Color1, setColor1] = useState("#000000");
  const [Color2, setColor2] = useState("#000000");
  const [Color3, setColor3] = useState("#000000");
 
  const newGame = ()=>{

  }
  const colorsobj = [
    {
      c1:"#000000",
      c2:"#aaaaaa",
      c3:"#ffffff",
      box:"#aaaaaa"
    },{
      c1:"#000000",
      c2:"#aaaaaa",
      c3:"#ffffff",
      box:"#ffffff"
    },{
      c1:"#000000",
      c2:"#aaaaaa",
      c3:"#ffffff",
      box:"#000000"
    }
  ]

  return (
    <div className="App flex flex-col items-center h-screen justify-center">
      <div className="bg-black h-64 w-64 text-white "></div>
      <div className="options ">
        <button className="1 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200  hover:border-yellow-300">{Color1}</button>
        <button className="2 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200 hover:border-yellow-300">{Color2}</button>
        <button className="3 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200 hover:border-yellow-300">{Color3}</button>
      </div>
      <button className="1 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-green-700 hover:text-white hover:border-green-700">New Game</button>
    </div>
  );
}

export default App;
