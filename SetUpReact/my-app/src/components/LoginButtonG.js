import React from 'react';
import {  Button} from 'react-bootstrap';

import { useGoogleAuth } from '../googleAuth';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
      <div>
        <button className="btn btn-outline-primary" onClick={signIn}>Login Google</button>
    
        </div>
      );
};

export default LoginButton;