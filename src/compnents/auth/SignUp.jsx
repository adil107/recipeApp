import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createNotification } from '../../common/Notification'

function SignUp() {

    const [inpVals, setInpVals] = useState({
        // state name and input attribute "name" value should be same 
        fname: "",
        email: "",
        passWord: ""
    })
    const handlechange = (e) => {
        const { name, value } = e.target
        setInpVals((allValues) => {
            return {
                ...allValues,
                [name]: value
            }
        })
    }

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inpVals);
        let signUpData = JSON.parse(localStorage.getItem("userSignUp"))
        // console.log(check);
        if (signUpData) {
            const check = signUpData.find(ele => ele.email === inpVals.email)
            if (check === undefined) {
                if (signUpData.length) {
                    signUpData = [...signUpData, inpVals]
                    localStorage.setItem("userSignUp", JSON.stringify(signUpData))
                } else {
                    localStorage.setItem("userSignUp", JSON.stringify([inpVals]))
                }
                history.push("/login")
                createNotification("success", "Success", "Successful Registered Your Account")

            }
            else {
                createNotification("error", "Error", "Email is already registered")
            }
        }
        else {
            createNotification("success", "Success", "Successful Registered Your Account")
            history.push("/login")
            localStorage.setItem("userSignUp", JSON.stringify([inpVals]))
        }

    }

    return (
        <div className="  w-full py-5 bg-gray-200">
            <div className="max-w-md w-full mx-auto px-2 sm:p-0">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-xl sm:text-3xl font-extrabold text-gray-900">Sign Up to your account</h2>

                </div>

                <form onSubmit={handleSubmit}
                    className=" rounded-md shadow w-full bg-white py-4 sm:py-8 px-5 sm:px-10 mt-5 sm:mt-8" autoComplete="Off"
                >
                    <div className="mb-6">
                        <label htmlFor="FName" className="text-gray-600 text-sm sm:text-base font-medium block mb-2">Full Name</label>
                        <input type="text" name="fname" id="FName"
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500"
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="Email" className="text-gray-600 text-sm sm:text-base font-medium block mb-2">Email Adress</label>
                        <input type="email" name="email" id="Email"
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500"
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="Pass" className="text-sm sm:text-base text-gray-700 font-medium block mb-2">Password</label>
                        <input type="password" name="passWord" id="Pass"
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500"
                            onChange={handlechange}
                            required
                        />
                    </div>

                    {/* <div className="mb-6">
                        <label htmlFor="CPass" className="text-sm sm:text-base text-gray-700 font-medium block mb-2">Confirm Password</label>
                        <input type="password" name="Cpass" id="CPass"
                            className="w-full p-2 text-sm sm:text-base text-gray-700 border border-gray-300 shadow outline-none rounded-md transition-all duration-150 focus:border-gray-500" />
                    </div> */}
                    <div className="mb-6">
                        <button className="w-full text-white bg-gray-700  py-2 rounded-md hover:bg-gray-600 focus:outline-none">Sign Up</button>
                    </div>
                    <div>
                        <h1 className="text-sm text-gray-700">you  have an account
                        {" "}
                            <Link to="/login" className="text-blue-500 underline">Login</Link> </h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
