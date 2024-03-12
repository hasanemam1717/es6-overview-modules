
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/watch/Watch'

function App() {

  const [watchs, setWatchs] = useState([]);

  useEffect(() =>{
    fetch('watchs.json')
    .then (res => res.json())
    .then (data => setWatchs(data))
  },[])

  // const watchs = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 7",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: 349
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense",
  //     price: 299
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 399
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 3",
  //     price: 279
  //   }
  // ];
  

  return (
    <>
   
      <h1>Vite + React</h1>
      {
        watchs.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
     
    </>
  )
}

export default App
