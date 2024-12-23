import React, { useState , useEffect} from 'react';
import { use } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    function formatTime() { 
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiam = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiam}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <div className="">
            <div>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default Clock;