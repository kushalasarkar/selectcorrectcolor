import React, { useEffect, useState } from 'react'

export default function AddSubmit() {
    const [studentData,setStudentData] = useState([])
    const [name,setName] = useState("");
    const [gender,setGender] = useState(0);
    const [details,setDetails] = useState("");
    const handleAdd=()=>{
        const newStudent = {
            name: name,
            gender: gender,
            details: details
        };
        setStudentData([...studentData,newStudent])
            }
            useEffect(()=>{
                console.log(studentData)
            },[studentData])
    return (
        
        <div>
            <div className='box border-2 w-60 m-6 p-2 border-yellow-950'>
                <h4>Student name</h4>
                <input className='w-52 border-2' placeholder='Enter name' 
                onChange={(e)=>{setName(e.target.value)}}/>
                <h4>Gender</h4>
                <div>
                    <input type='radio' name='gender' value='1' />
                    <label className='mr-6'>Male</label>
                    <input type='radio' name='gender' value='0' />
                    <label>Female</label>
                </div>
                <h4>Student detals</h4>
                <input className='border-2 h-16 w-52'/>
            </div>
            <button className='border-2 px-2 ml-6' onClick={handleAdd}>Add</button>

        </div>
    )
}
