// External Packages
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

// import AuthenticatedRoute from '../components/AuthenticatedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import LoginContainer from '../containers/LoginContainer';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import Dashboard from '../pages/Dashboard';
import EnquiryLog from '../pages/enquiry/enquiryLog';

// #toDo: create 404 error page displayed when user can't login.

export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            <UnauthenticatedRoute path='/' exact component={LoginContainer} props={childProps} /> 
            <UnauthenticatedRoute path='/auth/login' exact component={Login} props={childProps} />
            <UnauthenticatedRoute path='/auth/signup' exact component={Signup} props={childProps} /> 
            <UnauthenticatedRoute path='/app/dashboard' exact component={Dashboard} props={childProps} /> 
            <UnauthenticatedRoute path='/app/enquiry-logs' exact component={EnquiryLog} props={childProps} /> 

        </Switch>
    </BrowserRouter>
