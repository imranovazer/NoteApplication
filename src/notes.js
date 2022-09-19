import React from "react";
import MyNote from "./note";
import Data from "./data.json"

export default function Notes(props) {

    const azer = props.data;


    return (


        <div className="NotesMain">
            {
                azer.map(e => <MyNote isSaved={e.isSaved} key={e.id} id={e.id} deleteFun={props.deleteFun} SaveFun={props.SaveFun} SaveText={props.SaveText} value={azer[e.id].text} />)
            }


        </div>
    );
}