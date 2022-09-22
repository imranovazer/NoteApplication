import React from "react";
import MyNote from "./note";


export default function Notes(props) {

    const azer = props.data;





    return (


        <div className="NotesMain">
            {
                azer.map(e => <MyNote data={props.data} isSaved={e.isSaved} key={e.id} id={e.id} deleteFun={props.deleteFun} SaveFun={props.SaveFun} />)
            }


        </div>
    );
}