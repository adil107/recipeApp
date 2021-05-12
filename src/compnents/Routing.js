import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from "react-router-dom"
import { loginSuccess } from '../redux/login/LoginActions'
import Home from './Home'
import Loader from './Loader'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
function Routing() {

    const { isAuthenticate } = useSelector(state => state.login)
    const token = localStorage.getItem("access_token")
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(loginSuccess())
        }
    }, [dispatch, token])

    return (
        <>
            <Loader />
            {isAuthenticate ?
                <Switch >
                    <Route exact path="/" component={() => <Home />} />
                    <Redirect to="/" />

                </Switch>
                :
                <Switch >
                    <Route exact path="/login" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Redirect to="/login" />
                </Switch>
            }

        </>

    )
}

export default Routing
