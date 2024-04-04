import React, { useState } from 'react'

function Corousal() {
    const [item,setItem] = useState(0);
    const arr = [
        "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png?20180911185634",
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg",
        "https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-desktop-wallpaper-03-en-15dec20?$1600px--t$",
        "https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-desktop-wallpaper-02-en-15dec20?$1600px--t$",
      ];

    
    return (
    <div>
      
      <div className='flex justify-around '>
        <button onClick={()=>{if(item!=0){setItem(item-1)}else{setItem(arr.length-1)}}}>Prev</button>
        <img src={arr[item]} className="w-64 h-64"></img>
        <button onClick={()=>{if(item!=arr.length-1){setItem(item+1)}else{setItem(0)}}}>Next</button>
      </div>
      {/* <div className='flex w-64'>
        {arr.map((e,index) => 
            <img key={index} src={e} alt="abc" />
        )}
      </div> */}
    </div>
  );
}

export default Corousal