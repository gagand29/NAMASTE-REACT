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
    <div className="w-80 rounded-xl bg-white shadow-md p-6 text-center">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">User Card</h1>
      <button
        className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition-colors mb-4"
        onClick ={()=>setCount(count+1)}
      >
        click me
      </button>
      <h1 className="text-lg font-medium text-gray-700 mb-2">count = {count}</h1>
      <h2 className="text-gray-600">Name : {name}</h2>
      <h3 className="text-gray-600">Location : Chicago</h3>
      <h4 className="text-gray-500 text-sm mt-2">Contact: @gagand29</h4>
    </div>
  )
}

export default User;