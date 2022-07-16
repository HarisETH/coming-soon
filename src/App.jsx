import { useState } from 'react'
import './App.css'
import Main from './comp/Main'

function App() {
  document.addEventListener('contextmenu', event => event.preventDefault());

  return (
   <div className='overflow-hidden'>
      <Main />
      
   </div>
  )
}

export default App
