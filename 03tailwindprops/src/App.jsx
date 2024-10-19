import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  const [count, setCount] = useState(0)
  let haaYe={
    username:"prithvi Raj"
    
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>haa bsdk kya huaa bol</h1>
     <Card channel="chaiaurcode" myArr={haaYe} />

     <Card/>

    </>
  )
}

export default App
