import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [gin, Ekjora]= useState(15)

  const addValue=()=>{
    Ekjora(gin+1)
  }
  const lessValue=()=>{
    Ekjora(gin-1)
  }

  return (
    <>
      <h1>kya haa hai be </h1>
      <h2>Counter value:{gin} </h2>

      <button onClick={addValue}>Add value{gin}</button><br />
      <button onClick={lessValue} >Remove value{gin}</button>
      <p>Footer:{gin}</p>
    </>
  )
}

export default App
