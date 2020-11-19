import React from 'react';
import { useGoogleAuth } from '../googleAuth';
import {Button} from 'reactstrap';


const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <Button outline color="danger" onClick={signOut}>Logout</Button>

      );
};

export default LogoutButton;