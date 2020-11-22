import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import { Provider, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props=>
    localStorage.getItem('login')?(<Component {...props}/>):(<Redirect to ={`/`}
    />
    
    )
}
/>
)


  
 

export default PrivateRoute;