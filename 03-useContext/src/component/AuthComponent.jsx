import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import "./AuthComponent.css"

export function Authcomponent(props) {

    const authContext = useContext(AuthContext)
    const buttonText = authContext.isAuthenticated ? "Sign In" : "Sign Up";
    return (
        <div className="LoginForm" >
            <div className="Input">
                <label>UserName</label> <input name="username" value="" />
            </div>
            <div className="Input">
                <label>Password</label> <input name="password" value="" />
            </div>
            <button onClick={authContext.toggleLogin}>{buttonText}</button>
        </div>
    )
}
