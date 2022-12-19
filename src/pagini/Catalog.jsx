import React from "react";
import Elev from "./Elev";
import Profesor from "./Profesor";

const Catalog = () => {
    const loggedUser = ''
    return(
        <>
        <h2> Catalog </h2>
        <br/>
        {loggedUser === 'elev' ? <Elev/> : <Profesor/>}
        </>
    )
}

export default Catalog