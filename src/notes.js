import React from "react";
import MyNote from "./note";
import Data from "./data.json"

export default function Notes(props)
{
    
    const azer =props.data ;
    
    return (

        
        <div className="NotesMain">
            {
                azer.map(e=><MyNote key={e}/>)
            }
            
            
        </div>
    ) ;
}