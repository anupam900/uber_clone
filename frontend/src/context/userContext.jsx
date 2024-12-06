import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider