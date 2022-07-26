import React from "react";
import  ReactDOM  from "react-dom";
import NavBar from "./navbar";
import Notes from "./notes";

function  App ()
{
   const [MyData,SetData]= React.useState([]) ;
  //  const lastnum= parseInt((MyData[MyData.length-1] ));
   console.log(MyData) ;
   
   function clickMe()
   {
    var lastnum= parseInt((MyData[MyData.length-1] ));
    var newNum = lastnum+1 ;
    
    var addnum = newNum.toString() ;
    
    SetData(prevState => ([...prevState,addnum]));
   }
   
  return (

    <div className="MAIN">
      <NavBar funprop={clickMe}/>
      <Notes data={MyData}/>
     
    </div>

  ) ;

}

ReactDOM.render(<App/>,document.getElementById("root")) ;