import React from 'react';
import { useGoogleAuth } from '../googleAuth';
import {Button} from 'reactstrap';
import  { Redirect } from 'react-router-dom'


const LogoutButton = () => {
    const logout = () => {
        localStorage.removeItem("nombre");
        localStorage.removeItem("email");

        localStorage.removeItem("id");

        localStorage.removeItem("token");
        window.location ="http://localhost:3000/";
    };
      if(!localStorage.getItem('token')){
        return <Redirect to='/login'/>
    }
    return (
        <Button outline color="danger" onClick={logout}>Logout</Button>

      );
};

export default LogoutButton;