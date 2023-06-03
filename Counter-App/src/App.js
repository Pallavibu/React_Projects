import {useState} from 'react'
function Counteri(){
  let [counti, setCounti] = useState(0);
    function increament(){
      setCounti(counti + 1)
    }
    return(
      <div>
        <button onClick={increament}>increament : {counti}</button>
      </div>
    )
  };
function Counterd(){
    let [countd, setCountd] = useState(100);
    function decreament(){
      setCountd(countd - 1)
    }
    return(
      <div>
        <button onClick={decreament}>
          decreament : {countd}</button>

      </div>
    )
};
function App() {
  return (
    <>
    <h1>Welcome to react</h1>
    <Counteri/>
    <Counterd/>
    
    </>
  )
}

export default App;

