const Error = () => {

  const error = useRouteError();
  console.log(error);
  return(
    <div>

  <h1>Oops! Something went wrong.</h1>
  <h2>{error.statusText}</h2>
    </div>
)
}

import {useRouteError} from "react-router"

export default Error;