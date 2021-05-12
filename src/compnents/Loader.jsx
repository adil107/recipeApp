import React from 'react'
import { useSelector } from 'react-redux'

function Loader() {

    const { isLoading } = useSelector(state => state.recipe)
    const { login_Loading } = useSelector(state => state.login)
    return (
        <>
            { isLoading || login_Loading ?
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <h1 className="text-gray-100 text-4xl">Loading....</h1>
                </div>
                :
                null
            }
        </>
    )
}

export default Loader
