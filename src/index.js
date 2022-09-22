import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar";
import Notes from "./notes";

function App() {


  //-----------------------TEST

  //[{ id: 0, isSaved: true, text: "" }]
  const [MyData, SetData] = React.useState([]);
  console.log("DATA", MyData);

  React.useEffect(
    () => {
      var data = JSON.parse(localStorage.getItem("DATA"));
      if (data) {
        SetData(data);
      }

    },
    []

  )

  React.useEffect(
    () => {
      localStorage.setItem("DATA", JSON.stringify(MyData));
    },
    [MyData]

  )





  function clickMe() {
    if (MyData[0]) {
      var lastnum = parseInt((MyData[MyData.length - 1].id));
      var newNum = lastnum + 1;
      var addnum = newNum.toString();
      //var newData = [...MyData, { id: addnum, isSaved: true }];

      SetData(prevState => ([...prevState, { id: addnum, isSaved: true }]));
    }
    else {
      SetData([{ id: "0", isSaved: true }]);
    }

  }


  function Delete(id) {


    SetData(prevState => {
      //var j = 0;
      const newArray = [];
      for (var i = 0; i < prevState.length; i++) {
        if (prevState[i].id !== id) {
          newArray.push(prevState[i]); //{ ...prevState[i], id: j }
          //j++;
        }
      }
      return newArray;

    })

  }
  /*function SaveText(id, IN) {
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

  }*/

  function Save(id, input) {


    SetData(prevState => {
      const newArray = [];
      for (var i = 0; i < prevState.length; i++) {
        if (prevState[i].id !== id) {
          newArray.push(prevState[i]);
        }
        else {
          newArray.push({ ...prevState[i], isSaved: !prevState[i].isSaved, text: input })
        }
      }

      return newArray;

    })

  }

  return (

    <div className="MAIN">

      <NavBar funprop={clickMe} />
      <Notes data={MyData} deleteFun={Delete} SaveFun={Save} />

    </div>

  );

}

ReactDOM.render(<App />, document.getElementById("root"));