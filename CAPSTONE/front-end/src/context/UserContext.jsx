import React from 'react'
import { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = (props) => {

    // stores the currently logged in user so their comments and posts can be displayed, edited and deleted
    const [currentUser, setCurrentUser] = useState({});

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;
