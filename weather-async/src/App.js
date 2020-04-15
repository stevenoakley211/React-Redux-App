import React ,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  useEffect(()=>{
    axios
      .get('https://www.metaweather.com/api/location/2487956/')
      .then(res => {
          console.log(res)
      })
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
