import {useState} from 'react';

function AddItems(){
const [items, setItems] = useState(["item1", "item2", "item3"]);
const [name, setName] = useState("item4");

const onAddName = () => {
  setItems([...items, name])
  setName("")
};

return(
  <div>
      <ul>
        {items.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
      type = "text"
      value = {name}
      onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}> Add Items </button>
  </div>
);
}

function App(){
  return(
    <>
    <AddItems/>
    </>
  )
}
export default App;

