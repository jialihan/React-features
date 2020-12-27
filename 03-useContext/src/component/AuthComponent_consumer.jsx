import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import "./AuthComponent.css"

export function AuthComponent_consumer(props) {
    return (
        <AuthContext.Consumer>
            {context => (
                <div className="LoginForm" >
                    <div className="Input">
                        <label>UserName</label> <input name="username" value="" />
                    </div>
                    <div className="Input">
                        <label>Password</label> <input name="password" value="" />
                    </div>
                    <button onClick={context.toggleLogin}>{context.isAuthenticated ? "Sign In" : "Sign Up"}</button>
                </div>
            )
            }
        </AuthContext.Consumer>
    )
}
