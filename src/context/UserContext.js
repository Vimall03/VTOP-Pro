import React, { createContext, useState } from 'react';

// Create a new context
const UserContext = createContext();

// Create a context provider component
const UserProvider = ({ children }) => {

    const [toggleMode, setToggleMode] = useState('dark');

    return (
        <UserContext.Provider value={{ toggleMode, setToggleMode }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
