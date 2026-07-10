const Error = () => {

  const error = useRouteError();
  console.log(error);
  return(
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <h2 className="text-gray-500">{error.statusText}</h2>
    </div>
)
}

import {useRouteError} from "react-router"

export default Error;