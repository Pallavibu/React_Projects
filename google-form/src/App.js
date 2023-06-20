import { useState, createContext} from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

export const myContext = createContext();

function App() {

  const[name, setName] = useState("");
  const[color, setColor] = useState("");

  const myName = (event) =>{
      setName(event.target.value)
  }

  const myColor = (event) =>{
    setColor(event.target.value)
  }
  return (

   <myContext.Provider value={{name, color}}>
   
      <h1>Pallavi</h1>
      <Navbar />
      <Herosection/>
      <form>
        <input 
        type = {Text}
        placeholder="enter your name"                                       
        value = {name}
        onChange={myName}
    />
    <input
    type= {Text}
    placeholder="enter your favourite colour"
    value={color}
    onChange={myColor}
    />
    </form>

    </myContext.Provider>
  )
}

export default App;
