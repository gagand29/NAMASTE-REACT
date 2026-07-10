import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About</h1>

      <div className="flex justify-center">
        <User name={"gagan"}/>
      </div>
      {/*<UserClass name={ "Akshay"}*/}
      {/*location={"Chicago"}/>*/}
    </div>
  );
};

export default About;