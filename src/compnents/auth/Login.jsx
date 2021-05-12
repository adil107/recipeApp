import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { loginAction, LoginWithSocial } from '../../redux/login/LoginActions'
import { createNotification } from "../../common/Notification"
import { facebookProvider, fireBase, googleProvider } from "./FirebaseAuth"

function Login() {
    const [inpVal, setInpVal] = useState({
        email: "",
        passWord: ""
    })
    const disPatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setInpVal((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let signUpData = JSON.parse(localStorage.getItem("userSignUp"))
        if (!signUpData) {
            createNotification("error", "Error", "please Sign Up your Account")
            history.push("/sign-up")
        }
        else {
            disPatch(loginAction(signUpData, inpVal))
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const res = await fireBase.auth().signInWithPopup(googleProvider)
            console.log(res);
            const token = res.credential.accessToken
            disPatch(LoginWithSocial(token))
        } catch (error) {
            console.log(error);
        }
    }
    const handleFacebookLogin = async () => {

        try {
            const res = await fireBase.auth().signInWithPopup(facebookProvider)
            console.log(res);
            const token = res.credential.accessToken
            disPatch(LoginWithSocial(token))
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-200">
            <div className="max-w-md w-full  rounded-md shadow bg-white py-4 sm:py-8 px-5 sm:px-10 ">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-xl sm:text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

                </div>

                <form onSubmit={handleSubmit} className=" mt-10 ">

                    <div className="mb-6">
                        <label htmlFor="Email" className="text-gray-600 text-sm sm:text-base font-medium block mb-2">Email Adress</label>
                        <input type="email" name="email" id="Email" required
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="Password" className="text-gray-700 text-sm sm:text-base font-medium block mb-2">Password</label>
                        <input type="password" name="passWord" id="Password" required
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <button className="w-full text-white bg-gray-700 outline-none py-2 rounded-md hover:bg-gray-600 focus:outline-none">Sign In</button>
                    </div>
                    <div>
                        <h1 className="text-sm text-gray-700">you don't have an account
                        {/* {" "} */}
                            <Link to="/sign-up" className="text-blue-500 underline ml-1">Sign Up</Link> </h1>
                    </div>



                </form>
                <div className="flex flex-col sm:flex-row items-center sm:justify-center mt-5 ">
                    {/* <LoginWithFacebook /> */}
                    <button
                        className="bg-red-700 text-xs text-white px-3 py-2 rounded focus:outline-none"
                        onClick={handleGoogleLogin}
                    >
                        Login with Google
                    </button>
                    <span className="mx-0 sm:mx-2 sm:py-0 inline-block"> or</span>
                    <button
                        className="bg-blue-700 text-xs text-white px-3 py-2 rounded focus:outline-none"
                        onClick={handleFacebookLogin}
                    >
                        Login with Facebook
                        </button>

                </div>
            </div >


        </div >
    )
}

export default Login
