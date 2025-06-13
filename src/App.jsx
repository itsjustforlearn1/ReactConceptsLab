import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'
import Colorpicker from './Components/Colorpicker'
import Fruits from './Components/Fruits'
import Car from './Components/car'
import ToDoList from './Components/ToDoList';
import Count from './Components/Count';
import Timer from './Components/Timer';

function App() {


  return (
    <>
      <Colorpicker />
      <Fruits />
      <Car />
      <ToDoList/>
      <Count/>
      <Timer/>
    </>
  )
}

export default App
