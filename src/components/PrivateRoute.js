import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({children, ...routeProps}) => {

   const profile = false


   if(!profile){
       return <Redirect to= "/SignIn" />
   }

  return (
    <Route {...routeProps}>
    {children}
    </Route>
  )
}

export default PrivateRoute