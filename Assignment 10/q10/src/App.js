import React,{useState} from "react"
import './App.css';

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
     
     <div className="calculator">
       <form action = "">
        <div >
          <input className="display-input" type= "text" value={value}/>
          <input className="clear" type="button" value="Clear" onClick={e=>setValue("")}/>
        </div>
        <div >
          <input className="positive" type="button" value="+" onClick={e=>setValue(value + e.target.value) }/>
          <input className="equal" type="button" value="=" onClick={e=>setValue(eval(value))}/>
        </div>
        <div>
        <input className="multiply" type="button" value="*" onClick={e=>setValue(value + e.target.value) }/>
        <input className="minus" type="button" value="-" onClick={e=>setValue(value + e.target.value) }/>
        <input className="divide" type="button" value="/" onClick={e=>setValue(value + e.target.value) }/>
        </div>

        <div className="nums1">
        <input type="button" value="1" onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="2"  onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="3" onClick={e=>setValue(value + e.target.value) }/>
        </div>

        <div className="nums1">
        <input type="button" value="4" onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="5" onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="6" onClick={e=>setValue(value + e.target.value) }/>
        </div>

        <div className="nums1">
        <input type="button" value="7" onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="8" onClick={e=>setValue(value + e.target.value) }/>
        <input type="button" value="9" onClick={e=>setValue(value + e.target.value) }/>
        </div>
        <div className="nums2">
        <input type="button" value="0" onClick={e=>setValue(value + e.target.value) }/>
        </div>
        
       </form>
     </div>
     </div>

  );
}

export default App;
