import React from "react";
import  ReactDOM  from "react-dom";
import NavBar from "./navbar";
import Notes from "./notes";

function  App ()
{
   const [MyData,SetData]= React.useState([{id: "0",isActive: false}]) ;
  
   console.log(MyData) ;
   
   function clickMe()
   {
    var lastnum= parseInt((MyData[MyData.length-1].id ));
    var newNum = lastnum+1 ;
    var addnum = newNum.toString() ;
    SetData(prevState => ([...prevState,{id:addnum,isActive:false}]));
   }
   function Delete(id)
   {
      SetData(prevState=>
        {
          const newArray=  [] ;
          for(var i= 0;i<prevState.length;i++ )
          {
            if(prevState[i].id!=id)
            {
              newArray.push(prevState[i]) ;
            }
          }

          return newArray ;

        }) 
      
   }
   
  return (

    <div className="MAIN">
      <NavBar funprop={clickMe}/>
      <Notes data={MyData} deleteFun={Delete}/>
     
    </div>

  ) ;

}

ReactDOM.render(<App/>,document.getElementById("root")) ;