
import React, { useState, useEffect } from 'react'
import './App.scss';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project'
function App() {
  //! DECLARATION useState pour l'Array tours
  const [tours, setTours] = useState([])

  //! Déclaration de la function fetchTours qui permet de recupéré les données depuis l'API
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])

  //! Affichage de mon appli
  if(tours.length === 0){
    return (
      <div className="App">
        <div className="container">
          <h2>There are no tours left ! Try refreshing </h2>
          <button className="fetch" onClick={()=>fetchTours()}>REFRESH HERE</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="container">
        <Tours tours={tours}/>
        </div>
      </div>
    )
  }
}

export default App;
