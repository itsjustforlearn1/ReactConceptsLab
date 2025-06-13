import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    function formatDate() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridian = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridian}`
    }
    function padzero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <div>
            <span>{formatDate()}</span>
        </div>
    )
}