import logo from './logo.svg';
import  { useState, useEffect } from "react";
import './App.css';
import './index.css';
import Header from './Header';
import AddTask from "./AddTask";

function App() {
  const [data,setData]= useState([]);
  const url = "http://localhost:5000/posts";

  const getData = () => {
    const postBody = {
      type: "hot",
      limit: 2,
    };

    //const url="https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
    //const url = "https://jsonplaceholder.typicode.com/comments";

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(postBody),
      },
    })
      .then(function (response) {

        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);//empty means runs one time, whenever data changes it will render

  return (
    <div className="margin-left App primary-color">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <AddTask data={data} setData={setData} />
        <Header  data={data} setData={setData}></Header>        
      </header>
    </div>
  );
}



export default App;
