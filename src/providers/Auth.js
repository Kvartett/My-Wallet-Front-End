import React, { useState } from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        token: ""
    })

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, config }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)