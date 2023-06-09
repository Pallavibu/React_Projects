import React from "react"

function Card({myname, list}){
    //console.log(props)
    return(
        <>
            <div>This is a card</div>
            <div>{myname}</div>
            <ul>
                {list.map((l) => (
                    <li key={l}>{l}</li> 
                ))}
            </ul>
        </>
    );
}

export default Card;