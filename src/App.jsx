import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Filter/>
  )
}

export default App
