
import React, { useContext, useEffect } from 'react'
import { userContext } from '../../../context/UserContext/UserContext'
import { Navigate } from 'react-router-dom'




function ProtectedRoute({ children }) {


    const { Token } = useContext(userContext)

    if(Token){

        return children
    }
    else{
        alert('Please Login First')
        return <Navigate to={'/login'} />
    }



}




export default ProtectedRoute
