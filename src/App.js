
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <LoadCountry></LoadCountry> */}
    </div>
  );
}

// function LoadCountry(){
//   const [countrys, setCountry]= useState([]);

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountry(data))

//   },[])
//   return(
//     <div>
//       <h2>All Country in the world.</h2>
//       <p>How much country in here:{countrys.length}</p>
//       {
//         countrys.map(country => <Country name={country.name.common} rajdhani= {country.capital} jonogon={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country (props){
//   return(
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h2>Capital:{props.rajdhani}</h2>
//       <h3>jonosonkha:{props.jonogon}</h3>
//     </div>
//   )
// }


export default App;
