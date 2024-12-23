
import React, { useState, useEffect, useRef } from 'react';

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {

        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop() {

        setIsRunning(false);
        stopBtn.style.backgroundColor = "black";
     
    }

    function reset() {

        setElapsedTime(0);
        setIsRunning(false);
        
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        miliseconds = String(miliseconds).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className=''>
            <div className='flex flex-col items-center border-2 rounded-3xl font-mono'>
                <div className='text-slate-400 shadow-md display p-5 text-6xl'>
                    {formatTime()}
                </div>
                <div className='controls flex flex-row'>
                    <button onClick={start} id='start' className='px-5 py-1 m-1 rounded-lg bg-slate-900 hover:bg-slate-800 transition ease-in'>Start</button>
                    <button onClick={stop} id='stop' className='px-5 py-1 m-1 rounded-lg bg-slate-900 hover:bg-slate-800 transition ease-in'>Stop</button>
                    <button onClick={reset} id='reset' className='px-5 py-1 m-1 rounded-lg bg-slate-900 hover:bg-slate-800 transition ease-in'>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;