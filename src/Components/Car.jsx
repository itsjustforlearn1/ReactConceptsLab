import React from 'react'
import { useState } from 'react'
export default function Car() {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar() {
        const newCar={year:carYear,make:carMake,model:carModel}
        setCars(c=>[...c,newCar]);
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    function handleDeleteCar(index) {
        setCars(c=>c.filter(_,i !==index ))
    }
    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }
    return (
        <div>
            <h1>Car Object</h1>
            <ul>
                {cars.map((cars,index)=>
                <li key={index} onClick={()=>handleDeleteCar(index)}>
                    {cars.year} {cars.make} {cars.model}
                </li>) }
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} /><br />
            <input type="text" value={carModel} onChange={handleModelChange} /><br />
            <button onClick={handleAddCar}>Add car</button>
            <button onClick={handleDeleteCar}>Delete car</button>
        </div>
    )
}
