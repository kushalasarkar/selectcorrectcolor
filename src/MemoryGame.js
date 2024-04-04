import React, { useEffect, useRef, useState } from 'react'

function MemoryGame() {
    const [prevActive,setPrevActive] = useState("100");
    const [active,setActive] = useState("99");
    // const [newStyle,setNewStyle] = useState({});
    const newStyle = useEffect((prevActive,active)=>{
      
        return {"backgroundColor":"white"}
      
    },[active])
    let arr = ["A","D","F","C","B","E","E","B","C","F","D","A"];
    
    const handleClick=(i)=>{
      setPrevActive(active);
      setActive(i);
      // if(prevActive == Active){
      //   prevActive
      // }
    }

  return (
    <div className=' flex w-screen bg-slate-500 h-screen items-center justify-center'>
        <div className='flex flex-wrap mx-40 h-64 w-64 border-4 border-black rounded-xl justify-center bg-slate-400'>
            {/* <button className='w-1/4 bg-black m-1' style={newStyle}  */}
            {/* 
            // onClick={()=>{handleClick()}}>A</button>
            // <button className='w-1/4 bg-black m-1' style={newStyle}  onClick={()=>{this.handleClick()}}>B</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>C</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>D</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>E</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>F</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>A</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>B</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>C</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>D</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>E</button>
            // <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>F</button> */}

            {arr.map((i,index)=><button className='w-1/4 bg-black m-1 text-white' style={newStyle} key={i} onClick={(i)=>{handleClick()}}>{i}</button>)}
            
        </div>
    </div>
  )
}

export default MemoryGame