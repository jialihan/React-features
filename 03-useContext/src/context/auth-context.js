import React, { useState } from 'react'

export const AuthContext = React.createContext({
    isAuthenticated: false,
    toggleLogin: () => { }
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleLoginHandler = () => {
        setIsAuthenticated(!isAuthenticated);
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleLogin: toggleLoginHandler }}>
            {props.children}
        </AuthContext.Provider>)
}
export default AuthContextProvider;