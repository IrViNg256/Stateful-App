import './App.css';
import { useState, useEffect, useRef } from "react";
import image from "./hey-you.gif"

function App() {
  const [nombre,setNombre] = useState(() =>{
    const initalValue = JSON.parse(localStorage.getItem('nombre'));;
    return initalValue || "";
  });
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setNombre(nombreRef.current.value);
  }

  const nombreRef = useRef();

  useEffect(()=>{localStorage.setItem('nombre' ,JSON.stringify(nombre))}, [nombre]);

  return (
    <div className="App">
        <h1>WELCOME TO SKYRIM</h1>
        <div>
          <h2>TELL ME YOUR NAME, TRAVELER</h2>
          <form onSubmit={handleSubmit}>
            <input 
            id="nombre" 
            type="text"
            placeholder="Your name" 
            ref={nombreRef}
            >
            </input>
            <button type="submit" id="button-submit">Confirm</button>
          </form>
        </div>
        <p>Hey you, you're finally awake. You were trying to cross the border, right {nombre}?</p>
        <img src={image} alt="hey-you" width="600"/>
    </div>
  );
}

export default App;
