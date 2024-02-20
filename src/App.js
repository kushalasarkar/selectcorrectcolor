import './App.css';
import { useState } from 'react';

function App() {
  const [currColor, setCurrColor] = useState({});
  const [Color1, setColor1] = useState("#000000");
  const [Color2, setColor2] = useState("#000000");
  const [Color3, setColor3] = useState("#000000");
  const [currNo, setCurrNo] = useState(0);
  const [bg,setbg] = useState({});
  
  const colorsobj = [
    {
      c1:"#000000", //black
      c2:"#aaaaaa", //grey
      c3:"#3fabab", //cian
      box:"#aaaaaa"
    },{
      c1:"#000000",
      c2:"#aaaaaa",
      c3:"#3fabab",
      box:"#3fabab"
    },{
      c1:"#000000",
      c2:"#aaaaaa",
      c3:"#3fabab",
      box:"#000000"
    }
  ]
  const newGame = ()=>{
    console.log("new "+colorsobj.length);
    
    console.log(currNo);
    setCurrColor({backgroundColor: colorsobj[currNo].box})
    setColor1(colorsobj[currNo].c1)
    setColor2(colorsobj[currNo].c2)
    setColor3(colorsobj[currNo].c3)
    console.log("num1: "+currNo);
  }
  const checkAns=(color)=>{
    console.log("color: "+color);
    console.log("box: "+colorsobj[currNo].box);
    console.log("num2: "+currNo);

    color===colorsobj[currNo].box ? setbg({backgroundColor: "green"}): setbg({backgroundColor: "red"})
    if(currNo === colorsobj.length-1){
      setCurrNo(0);
      console.log("updated "+ currNo);
    }
    else{
      setCurrNo(currNo+1);
    }
  }
  return (
    <div className="App flex flex-col items-center h-screen justify-center " style={bg}>
      <div className="box bg-black h-64 w-64 text-white" style={currColor}></div>
      <div className="options ">
        <button className="b1 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200  hover:border-yellow-300" onClick={()=>checkAns(Color1)}>{Color1}</button>
        <button className="b2 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200 hover:border-yellow-300" onClick={()=>checkAns(Color2)}>{Color2}</button>
        <button className="b3 m-2 border-2 rounded border-blue-500 px-2 py-1 hover:bg-gray-200 hover:border-yellow-300" onClick={()=>checkAns(Color3)}>{Color3}</button>
      </div>
      <button className="1 m-2 border-2 rounded border-blue-500 px-2 py-1  " onClick={()=>{newGame()}}>New Game</button>
    </div>
  );
}

export default App;
