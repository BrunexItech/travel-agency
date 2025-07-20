import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const isLoggedin = !!localStorage.getItem('accessToken');

    if(!isLoggedin){
        return <Navigate to ="/signup" replace/>;
    }

    


  return children
    
  
};

export default ProtectedRoute