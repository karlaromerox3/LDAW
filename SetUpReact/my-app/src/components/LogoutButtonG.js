import React from 'react';
import { useGoogleAuth } from '../googleAuth';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button className="btn btn-outline-primary" onClick={signOut}>Logout</button>

      );
};

export default LogoutButton;