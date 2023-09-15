import './App.css'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [colorMode, setColorMode] = useState('dark-mode')

  const onColorSubmit = (color) => {
    color === 'light' ? setColorMode('light-mode') : setColorMode('dark-mode');
  }

  return (
    
      <div className='app'>
        <Navbar colorChange={onColorSubmit} colorMode={colorMode}/>
        <Routes>

        </Routes>
        
      </div>
      
    
  )
}

export default App
