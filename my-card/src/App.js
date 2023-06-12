import React from "react"
import Card from "./card"
import { useState } from "react"
import Axios from "axios"

function App(){

    const [details, setDetails] = useState({})

    const fetechDeatils = async() => {
        const {data} = await Axios.get('https://randomuser.me/api');
    
        console.log("RESPONSE", data);

        const details = data.results[0];
        setDetails(details)
    };
    let list = ["Apple", "Bat", "Cat"]
    return(
        <>
         <div>App</div>
         <Card myname="Pallavi" list={list} details={details} />
         <button
         onClick={fetechDeatils}
         >get details</button>
        </>
    )
}
export default App;
