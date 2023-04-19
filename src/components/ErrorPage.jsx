import { useRouteError } from "react-router-dom";


import React from 'react'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
      <div id="error-page">
          <h1>Ooooooops!</h1>
          <p>   {error.statusText || error.message }</p>

      
      </div>
  )
}

export default ErrorPage