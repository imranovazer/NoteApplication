import React  from "react";

export default function MyNote(props)
{
    const [isClicked,setIsClicked] =React.useState(true);
    function Click()
    {
        setIsClicked(prevState=>!prevState) ;
    } 
    return (
        <div className="MyNote">
            <div className="message">
                <textarea className="TextArea" cols={"80"} rows={"6"}/>
            </div>
            
            <div className="Settings" onClick={Click}>...</div>
            <ul className={isClicked?"subSet Active":"subSet"}>
                <li className="Delete" onClick={()=>props.deleteFun(props.id)}>delete</li>
                <hr />
                
                <li>edit</li>

            </ul>

        </div>
    ) ;

}