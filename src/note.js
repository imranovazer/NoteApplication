import React from "react";

export default function MyNote(props) {
    const [TextNote, setTextNote] = React.useState("");

    function handleChange(event) {
        setTextNote(event.target.value);

    }
    console.log("FAK", props.value);



    return (

        <div className="MyNote">

            <div className="message" >
                {props.isSaved ? <textarea className="TextArea" onChange={handleChange} onKeyUp={() => props.SaveText(props.id, TextNote)} rows={6} /> : <textarea className="TextArea" disabled rows={6} />}
            </div>
            {
                props.isSaved ?

                    <div className="SavingState" >
                        <div className="Save" onClick={() => props.SaveFun(props.id)}>&#10003;</div>
                        <div className="Save Delete" onClick={() => props.deleteFun(props.id)}><i class='bx bx-trash'></i></div>
                    </div> :
                    <div className="EditState">
                        <div className="EditButt" onClick={() => props.SaveFun(props.id)}> <i class='bx bx-edit-alt'></i></div>
                    </div>
            }


        </div>
    );

}