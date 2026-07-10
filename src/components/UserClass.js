import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2:0,
      userInfo:{
        name:"dummy name",
        location:"dummy location",
        img:"dummy img"
      }
    }

    console.log(props);
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({userInfo:json,})
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }


  component
  render() {
    const {count,count2} = this.state;
    const {name,location,img} = this.state.userInfo;
    return (
      <div className="w-80 rounded-xl bg-white shadow-md p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">User Card</h1>
        <h1 className="text-lg font-medium text-gray-700">count = {count}</h1>
        <h4 className="text-gray-500 text-sm mb-4">count2={count2}</h4>

        <button
          className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition-colors mb-4"
          onClick ={()=>this.setState({count:count+1,
          count2: count2+1})}
        >click me </button>
        <h2 className="text-gray-600">Name : {name}</h2>
        <h3 className="text-gray-600 mb-3">Location : {location}</h3>
        <img className="w-16 h-16 rounded-full mx-auto" src={img} />
      </div>
    )
  }
}

export default UserClass;