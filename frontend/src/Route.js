import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import api from './services/api'

export default function RouteWrapper({  
    component: Component,
    isPrivate,
    ...rest
}){
    const [signed, setAuth] = useState(false)

    const token = sessionStorage.getItem('token')
        
        api.get('/user',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }}
        ).then(response=>setAuth(response.data.is_admin))
           
        if(!signed && isPrivate){
            return <Redirect to="/admin"/>
        }
        if(signed && !isPrivate){
            return <Redirect to="/admin/adminPanel"/>
        }
    
    return (
        <Route
            {...rest}
            component={Component}
            />
    )
}
RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
}
RouteWrapper.defaultProps = {
    isPrivate: false,
}