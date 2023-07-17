import {React, useState, useEffect} from 'react';
import './App.css';

function App() {
  const[name, setName] = useState("kiran")

  useEffect(()=>{
   fetch("https://api.github.com/users")
   .then(response => response.json())
   .then(data=> console.log(data))
   .catch(console.log("error"))
  },[])
  return (
    <div className="App">
      <input placeholder = "Enter the name"></input>
      <button>Get data</button>
      <h1>Name is {name}</h1>
    </div>
  );
}

export default App;
