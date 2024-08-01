import React, { useState } from 'react'
import './Timer.css'
export const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);

    // const timer =  setInterval(() => {
    //     if (sec > 0) {
    //         setSec(sec - 1);
    //     }
    // }, 1000)

    const startfunc = () => {

        const t = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            }
        }, 1000);
    }
    const resetfunc = () => {
        setMin(0);
        setHrs(0);
        setSec(0);
    }
    return (
        <div className='outbox'>
            <h1>Countdown Timer</h1>
            <div className='timerbox'>
                <div className='time'><h3>Hours</h3><h1>
                    <input value={hrs} placeholder='00' onChange={(e) => { setHrs(e.target.value) }}></input>
                </h1></div>
                <div className='time'><h3>Minutes</h3><h1>
                    <input value={min} placeholder='00' onChange={(e) => { setMin(e.target.value) }}></input>
                </h1></div>
                <div className='time'><h3>Seconds</h3><h1>
                    <input value={sec} placeholder='00' onChange={(e) => { setSec(e.target.value) }}></input>
                </h1></div>
            </div>
            <div>
                <button className='start' onClick={() => startfunc()}>Start</button>
                <button className='reset' onClick={() => resetfunc()}>Reset</button>
            </div>
        </div>
    )
}
