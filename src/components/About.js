import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
  return (
    <div>
      <h1>About</h1>

      <User
      name={"gagan"}/>
      {/*<UserClass name={ "Akshay"}*/}
      {/*location={"Chicago"}/>*/}
    </div>
  );
};

export default About;