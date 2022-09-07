import React from "react";

export const Greet = (props) =>{
    console.log(props.name)
    return (
        <React.Fragment>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </React.Fragment>
    )
}

export default Greet