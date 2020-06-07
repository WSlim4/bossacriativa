import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './services/history'
import api from './services/api'
import { store } from './store/index'

export default function RouteWrapper({  
    component: Component,
    isPrivate,
    ...rest
}){
    const role = store.getState().auth.role
    
    if(role === 'admin' && !isPrivate){
        return <Redirect to="/admin/adminPanel"/>
    }
    if(role !== 'admin' && isPrivate){
        return <Redirect to="/admin"/>
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