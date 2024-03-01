import React, { useRef, useState } from 'react'

function MemoryGame() {
    const [prevActive,setPrevActive] = useState("");
    const [active,setActive] = useState("");
    const [newStyle,setNewStyle] = useState({});
    const ourRef = useRef(null);
    
    const handleClick=()=>{
        console.log(ourRef.current.textContent);
        // console.log(e.currentTarget.textContent);
        // setActive(e.currentTarget.textContent);
        // if(e.currentTarget.textContent===active){
        //     setNewStyle({backgroundColor: "white"});

        // }
    }

  return (
    <div className=' flex w-screen bg-slate-500 h-screen items-center justify-center'>
        <div className='flex flex-wrap mx-40 h-64 w-64 border-4 border-black rounded-xl justify-center bg-slate-400'>
            <button className='w-1/4 bg-black m-1' style={newStyle} 
            ref={ourRef}
            onClick={()=>{handleClick()}}>A</button>
            <button className='w-1/4 bg-black m-1' style={newStyle} ref={ourRef} onClick={()=>{this.handleClick()}}>B</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>C</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>D</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>E</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>F</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>A</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>B</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>C</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>D</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>E</button>
            <button className='w-1/4 bg-black m-1' onClick={()=>{handleClick()}}>F</button>
            
        </div>
    </div>
  )
}

export default MemoryGame