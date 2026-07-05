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
      <div className="user-card">
        <h1>User Card</h1>
        <h1>count = {count}</h1>
        <h4>count2={count2}</h4>

        <button
          onClick ={()=>this.setState({count:count+1,
          count2: count2+1})}

        >click me </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <img src={img} />
      </div>
    )
  }
}

export default UserClass;