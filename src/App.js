import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import Barchart from './component/Barchart';


function App() {
  const [barData , setBarData] = useState([])

  useEffect(async()=>{
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json();
    const results = data.results;

    const loadMovies = {
        title:[],
        characters:[],
        planets:[],
        species:[],
        starships:[]
    }

    for(const key in results){
      loadMovies.title.push(results[key].title)
      loadMovies.characters.push(results[key].characters.length)
      loadMovies.planets.push(results[key].planets.length)
      loadMovies.species.push(results[key].species.length)
      loadMovies.starships.push(results[key].starships.length)
    }
    setBarData(loadMovies)
  },[])

  return (
    <div className="App">
      <Barchart
        barData = {barData}
      />
    </div>
  );
}

export default App;
