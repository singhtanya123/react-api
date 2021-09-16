import React,{useState,useEffect} from 'react';
function ShowTaskData(){

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div >
     {
       data && data.length>0 && data.map((item)=><p key={item.id}>{item.name}</p>)
     }
    </div>
  );
}


export default ShowTaskData;