import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar";
import Notes from "./notes";

function App() {


  //-----------------------TEST


  const [MyData, SetData] = React.useState(JSON.parse(localStorage.getItem("DATA")) ? JSON.parse(localStorage.getItem("DATA")) : [{ id: 0, isSaved: true, text: "" }]);



  console.log(MyData);

  function clickMe() {
    if (MyData[0]) {
      var lastnum = parseInt((MyData[MyData.length - 1].id));
      var newNum = lastnum + 1;
      var addnum = newNum.toString();
      var newData = [...MyData, { id: addnum, isSaved: true }];
      localStorage.setItem("DATA", JSON.stringify(newData));
      SetData(JSON.parse(localStorage.getItem("DATA")));
      //SetData(prevState => ([...prevState, { id: addnum, isSaved: true }]));
    }
    else {
      SetData(prevState => ([{ id: "0", isSaved: true }]));
    }

  }


  function Delete(id) {

    const newArray = [];
    for (var i = 0; i < MyData.length; i++) {
      if (MyData[i].id !== id) {
        newArray.push(MyData[i]);
      }
    }
    localStorage.setItem("DATA", JSON.stringify(newArray));
    SetData(JSON.parse(localStorage.getItem("DATA")));
    /*SetData(prevState => {
      const newArray = [];
      for (var i = 0; i < prevState.length; i++) {
        if (prevState[i].id !== id) {
          newArray.push(prevState[i]);
        }
      }
  
      return newArray;
  
    })*/

  }
  function SaveText(id, IN) {
    const newArray = [];
    for (var i = 0; i < MyData.length; i++) {
      if (MyData[i].id !== id) {
        newArray.push(MyData[i]);
      }
      else {
        newArray.push({ ...MyData[i], text: IN });
      }
    }
    localStorage.setItem("DATA", JSON.stringify(newArray));
    SetData(JSON.parse(localStorage.getItem("DATA")));

  }

  function Save(id) {

    const newArray = [];
    for (var i = 0; i < MyData.length; i++) {
      if (MyData[i].id !== id) {
        newArray.push(MyData[i]);
      }
      else {
        newArray.push({ ...MyData[i], isSaved: !MyData[i].isSaved })
      }
    }
    localStorage.setItem("DATA", JSON.stringify(newArray));
    SetData(JSON.parse(localStorage.getItem("DATA")));
    /*SetData(prevState => {
      const newArray = [];
      for (var i = 0; i < prevState.length; i++) {
        if (prevState[i].id !== id) {
          newArray.push(prevState[i]);
        }
        else {
          newArray.push({ ...prevState[i], isSaved: !prevState[i].isSaved })
        }
      }
  
      return newArray;
  
    })*/

  }

  return (

    <div className="MAIN">

      <NavBar funprop={clickMe} />
      <Notes data={MyData} deleteFun={Delete} SaveFun={Save} SaveText={SaveText} />

    </div>

  );

}

ReactDOM.render(<App />, document.getElementById("root"));