import React from 'react'
import { Navigate } from 'react-router-dom';
import {isAuthenticated} from '../ultis/localStorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const {user:{role}} = isAuthenticated()
    if(!role) {
        return <Navigate to='/signin' />
    }
  return props.children
}

export default PrivateRouter