import React from "react";
import  ReactDOM  from "react-dom";
import NavBar from "./navbar";
import Notes from "./notes";

function  App ()
{
   const [MyData,SetData]= React.useState([{id: "0",isSaved: true}]) ;
  
   console.log(MyData) ;
   
   function clickMe()
   {
    if(MyData[0])
    {
      var lastnum= parseInt((MyData[MyData.length-1].id ));
      var newNum = lastnum+1 ;
      var addnum = newNum.toString() ;
      SetData(prevState => ([...prevState,{id:addnum,isSaved:true}]));
    }
    else
    {
      SetData(prevState => ([{id:"0",isSaved:true}]));
    }
    
   }
   
   function Delete(id)
   {
      SetData(prevState=>
        {
          const newArray=  [] ;
          for(var i= 0;i<prevState.length;i++ )
          {
            if(prevState[i].id!==id)
            {
              newArray.push(prevState[i]) ;
            }
          }

          return newArray ;

        }) 
      
   }

   function Save(id)
   {
      SetData(prevState=>
        {
          const newArray=  [] ;
          for(var i= 0;i<prevState.length;i++ )
          {
            if(prevState[i].id!==id)
            {
              newArray.push(prevState[i]) ;
            }
            else
            {
              newArray.push({...prevState[i],isSaved:!prevState[i].isSaved})
            }
          }

          return newArray ;

        }) 
      
   }
   
   
  return (

    <div className="MAIN">
      <NavBar funprop={clickMe} />
      <Notes data={MyData} deleteFun={Delete} SaveFun={Save}/>
     
    </div>

  ) ;

}

ReactDOM.render(<App/>,document.getElementById("root")) ;