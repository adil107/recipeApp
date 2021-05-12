import React, { useState } from 'react'
import Avatar from 'react-avatar'

function SingleRecipeDish({ singleRecipe, hideShow, setHideShow }) {


    const [errorSingle, setErrorSingle] = useState(false)
    const handleSingleError = () => {
        setErrorSingle(true)
    }
    return (
        <>
            <div>
                <div className="flex justify-end items-center py-2 pr-2" onClick={() => {
                    setHideShow(!hideShow)
                    setErrorSingle(false)

                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="w-full h-44  overflow-hidden">
                    {!errorSingle ?
                        < img src={singleRecipe?.image} alt="" className="h-full w-full object-cover transform transition-all duration-300 hover:scale-125  hover:rotate-6 " onError={handleSingleError} />
                        :
                        <Avatar name={singleRecipe?.label} size="100%" />
                    }
                </div>
                <div className="py-2 pl-4">
                    <h1 className="capitalize sm:text-xl text-gray-700 font-bold ">{singleRecipe?.label}</h1>
                    <p className="font-medium text-sm sm:text-base text-gray-500 my-1">Calories : {singleRecipe?.calories?.toFixed(2)}</p>
                    <p className="text-sm text-gray-900 font-semibold mb-2">Time : {singleRecipe?.totalTime === 0 ? "20" : singleRecipe?.totalTime} minutes</p>
                    <p className=" text-sm sm:text-base font-medium text-gray-700 uppercase">Ingredients :-</p>
                    <ul itemType="circle" className="list-disc pl-4 pr-2 mt-2">
                        {singleRecipe?.ingredients?.map((ele, ind) => (
                            <li key={ind} className="text-gray-500 py-1 text-xs sm:text-base">{ele.text}</li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default SingleRecipeDish
