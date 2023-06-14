import React, { useEffect } from "react";
import Card from "./card";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});

  const fetechDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api");

    console.log("RESPONSE", data);

    const details = data.results[0];
    setDetails(details);
  };
  let list = ["Anurag", "Bharat", "Chetan"];

  useEffect(() => {
    fetechDetails();
  }, []);
  return (
    <>
      <div>App</div>
      <Card myname="Pallavi" list={list} details={details} />
      <button onClick={fetechDetails}>get details</button>
    </>
  );
}
export default App;



// practice debouncing
// practice more and more hooks (important : useState() and useEffect())
// fetch free apis and make projects
