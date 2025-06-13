import React from 'react'
import { useState } from 'react'

function Colorpicker() {
    const [ color, setColor ] = useState('#fc5632')
    function handleColorChange(event) {
        setColor(event.target.value)
    }
    return (
        <div className='color-container'>
            <h1>Colorpicker app</h1>
            <div className='color-display' style={{ background: color }}>
                <p>selected color:{color}</p>
            </div>
            <label >select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default Colorpicker
