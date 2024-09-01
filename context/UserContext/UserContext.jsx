import { createContext, useEffect, useState } from "react";


export const userContext = createContext()

export default function UserContextProvider({ children }) {

    const [Token, setToken] = useState(localStorage.getItem('Token'))


    return <userContext.Provider value={{ setToken, Token }}>
        {children}
    </userContext.Provider>


}