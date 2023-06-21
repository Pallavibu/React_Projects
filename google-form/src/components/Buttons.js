import React, { useContext } from "react";
import { myContext } from "../App";


const Buttons = () => {
    const data = useContext(myContext)
    return(
        <h1 style={{backgroundColor:data.color}}>Buttons</h1>
    )
}

export default Buttons;