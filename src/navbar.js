import React from "react";

export default function  NavBar(props)
{

    return (
        <div className="navbar">
            <div className="logo">MyNotes</div>
            <div className="addButton" onClick={props.funprop}> + </div>
        </div>

    ) ;
}