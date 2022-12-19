import React from "react";
import Elev from "./Elev";
import Profesor from "./Profesor";

const Catalog = () => {
    const loggedUser = ''
    return(
        <>
        {loggedUser === 'elev' ? <Elev/> : <Profesor/>}
        </>
    )
}

export default Catalog