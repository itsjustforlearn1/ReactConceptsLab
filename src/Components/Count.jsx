import React from 'react'
import { useState, useEffect } from 'react'

export default function Count() { 
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const [hight, setHigth] = useState(window.innerHeight)
    useEffect(() => {
        document.title = `Count:${count}`
    }, [count])
    useEffect(() => {
        window.addEventListener('resize', handleresize)
    })
    useEffect(()=>{
        document.title=`Size ${width}*${hight}`
    })
    function handleresize() {
        setWidth(window.innerWidth)
        setHigth(window.innerHeight)
    }
    function addcount() {
        setCount(c => c + 1)
    }
    return (
        <div>
            <p>window width:{width}</p>
            <p>window hight:{hight}</p>
            <p>Count:{count}</p>
            <button onClick={addcount}>Add</button>
        </div>
    )
}
