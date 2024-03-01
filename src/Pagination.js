import React, { useEffect, useState } from 'react'

function Pagination() {
    const [dataa,setDataa] = useState([])
    const [currPage, setCurrPage] = useState(1)
    useEffect(()=>{fetchData()},[])
    const fetchData=async()=>{
        const data =await fetch(`https://dummyjson.com/products?limit=100`)
        // console.log("Button Clicked");
        // const data =await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516726&lng=73.856255&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
        const jsonData = await data.json();
        // console.log(jsonData.products);
        // setDataa(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setDataa(jsonData.products)
      }
      console.log(dataa);

     

  return (
    <div>
      {/* <button className='p-2 border-2' onClick={()=>{fetchData()}}>Get API data</button> */}
      <div>
          {
          dataa.slice(currPage*10-10,currPage*10).map((d)=>{
            return <p>{d.title}</p>
          })}
        
      </div>        
      <button className='border-2 border-black p-2 m-2'
      onClick={()=>{currPage>1 && setCurrPage(currPage-1)}}>Prev</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(1); }}>1</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(2); }}>2</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(3); }}>3</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(4); }}>4</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(5); }}>5</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(6); }}>6</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(7); }}>7</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(8); }}>8</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(9); }}>9</button>
      <button className='p-1 active:underline' onClick={()=>{ setCurrPage(10); }}>10</button>
      <button className='border-2 border-black p-2 m-2'
      onClick={()=>{currPage<10 && setCurrPage(currPage+1)}}>Next</button>
    </div>
  )
}

export default Pagination