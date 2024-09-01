import React, { useContext } from 'react'
import { userContext } from '../../../context/UserContext/UserContext'
import { Navigate } from 'react-router-dom'





function ProtectedAuth({ children }) {


    const { Token } = useContext(userContext)

    if (Token) {

        return <Navigate to={'/'} />

    }
    else {
        return children
    }



}

export default ProtectedAuth
