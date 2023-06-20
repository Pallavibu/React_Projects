import react,{ useState } from 'react';
import Cards from './Cards';

function App() {

  const [count, setCount] = useState(0);

  const increament = () =>{
    setCount(count + 1)
  }

  const decreament = () =>{
    setCount(count-1)
  }
  return (
    <>
    <h1 className="text-green-800 font-bold ">Hello World</h1>
    <Cards name="Pallavi" />
    <Cards name="Apple"/>
    <Cards name="ball"/>
    <Cards name="cat"/>
    <h1>Counter App</h1>
    <div>{count}</div>
    <div className='button'>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
    </div>
    </>
  );
}

export default App;
