import './App.css';
import {React, useState} from 'react';

function App() {
  const[count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className ="container">
       
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
