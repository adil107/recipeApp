import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import ImageLoader from "../common/imageLoader/ImageLoader"
function Recipe({ Id, ClickFn, Recipie }) {

    const [errorImage, setErrorImage] = useState(false)
    const [imageLoader, setImageLoader] = useState(false)
    const handleBrokenError = () => {
        setErrorImage(true)
    }

    const handleImageOnLoad = () => {
        setImageLoader(true)
    }
    useEffect(() => {
        setErrorImage(false)
    }, [Recipie])
    return (

        <div>
            <div className="shadow-lg  py-4 rounded">
                <div className="px-2 pb-2">
                    <h1 className="capitalize truncate text-base md:text-xl text-gray-700 font-semibold">{Recipie.label}</h1>
                    <p className="text-gray-500 text-sm font-medium pt-1"> Calories : {Recipie.calories.toFixed(2)}</p>
                </div>

                <div className="h-44 overflow-hidden cursor-pointer relative" onClick={() => ClickFn(Id)} >
                    {!errorImage ?
                        < img src={Recipie.image} alt="" className="h-full w-full object-cover  transform transition-all duration-300 hover:scale-125  hover:rotate-6 "
                            onLoad={handleImageOnLoad}
                            onError={handleBrokenError}
                        />
                        :
                        <Avatar name={Recipie.label} size="100%" className="transform transition-all duration-300 hover:scale-110" />
                    }
                    {!imageLoader &&
                        <ImageLoader />
                    }
                </div>

                <div className="flex justify-between items-center px-2 pt-4">
                    <h1 className=" text-base md:text-lg font-medium text-gray-700">Ingredients</h1>
                    <svg
                        className="h-5 w-5 text-gray-500 cursor-pointer transform -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => ClickFn(Id)}
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>

                </div>

            </div>
        </div>


    )
}

export default Recipe
