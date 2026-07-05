import {useEffect, useState} from "react";

const User = ({name}) =>{
  const [count , setCount] = useState(0);


  useEffect(()=>{
fetchData();
setInterval(()=>{
  console.log("hello");
},1000)

    return ()=>{
  console.log("component unmount");
    }


  })

  console.log("render");

  async function fetchData(){
    const data = await fetch("https://api.github.com/users/gagand29");
    const json = await data.json();

    console.log(json);
  }
  return (
    <div className="user-card">
      <h1>User Card</h1>
      <button onClick ={()=>setCount(count+1)}>click me</button>
      <h1>count = {count}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Chicago</h3>
      <h4>Contact: @gagand29</h4>
    </div>
  )
}

export default User;