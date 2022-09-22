import React from "react";

export default function MyNote(props) {

    const [noteText, setNoteText] = React.useState("");


    function onChangeHandler(event) {
        setNoteText(event.target.value);
    }
    //THIS CODE BELOW MADE ME CRAZY TILL A FIXED IT
    React.useEffect(() => {
        var data;
        for (var i = 0; i < props.data.length; i++) {
            if (props.data[i].id == props.id) {
                data = props.data[i].text;
            }
        }
        //var data = props.data[props.id].text;
        if (data) {
            setNoteText(data)
        }
    }, [])////////////////////////////////

    console.log("TEXT", noteText);


    // console.log(noteText);


    return (

        <div className="MyNote">

            <div className="message" >
                {props.isSaved ? <textarea placeholder="Type a note..." value={noteText} className="TextArea" onChange={onChangeHandler} rows={6} /> : <textarea value={noteText} className="TextArea" disabled rows={6} />}
            </div>
            {
                props.isSaved ?

                    <div className="SavingState" >
                        <div className="Save" onClick={() => props.SaveFun(props.id, noteText)}>&#10003;</div>
                        <div className="Save Delete" onClick={() => props.deleteFun(props.id)}><i class='bx bx-trash'></i></div>
                    </div> :
                    <div className="EditState">
                        <div className="EditButt" onClick={() => props.SaveFun(props.id, noteText)}> <i class='bx bx-edit-alt'></i></div>
                    </div>
            }


        </div>
    );

}