import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import type {Product} from './types/product'

function App() {
  const [count,setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: 'Ngoc',
    age: 22
  })
  
  return <div className="App">
    {count}<button onClick={()=> setCount(count+1)}>Click count</button>
    <ShowInfo person={info}/>
  </div>
}

export default App
