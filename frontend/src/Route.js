import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { store } from './store/index'

export default function RouteWrapper({  
    component: Component,
    isPrivate,
    ...rest
}){
    const role = store.getState().auth.role
    
    if((role !== 'admin' && role !== 'artista') && isPrivate){
        return <Redirect to="/"/>
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