import React, { useEffect, useMemo, useState } from 'react'
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction } from '../redux/login/LoginActions'
import { dataFetchingAction } from '../redux/recipe/Actions'
import Recipe from './Recipe'
import SingleRecipeDish from "./singleRecipeDish"


function Home() {
    const [hideShow, setHideShow] = useState(false)
    const [signOut, setSignOut] = useState(false)
    const [searchVal, setSearchVal] = useState("")
    const [apiVal, setApiVal] = useState("chiken")
    // For SingleRecipe State
    const [singleRecipe, setSingleRecipe] = useState({})

    const { data } = useSelector(state => state.recipe)

    // For SingleRecipe Details Sidebar
    const ClickFn = (id) => {
        setSingleRecipe({ ...data[id].recipe })
        setHideShow(!hideShow)
    }

    //Search Recipe
    const handleSubmit = (e) => {
        e.preventDefault()
        setApiVal(searchVal)
        setSearchVal("")
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(dataFetchingAction(apiVal))
    }, [apiVal, dispatch])


    ///////// For SingleRecipe useMemo /////////////
    const SingleRecipeMemo = useMemo(() => {
        return <SingleRecipeDish
            singleRecipe={singleRecipe}
            hideShow={hideShow}
            setHideShow={setHideShow}
        />
    }, [hideShow, singleRecipe])

    //User LogOut
    const handleLogout = () => {
        dispatch(logOutAction())
    }

    return (
        <div className="w-full px-3 sm:px-10 relative overflow-hidden">
            <div className="max-w-7xl flex items-center py-5 mx-auto">

                <form onSubmit={handleSubmit} className="mr-2 flex-1 relative flex items-center justify-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 absolute right-2"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchVal}
                        className=" border text-sm sm:text-base px-2 py-2 rounded text-gray-700 bg-transparent focus:border-gray-400 transition-all duration-300 border-gray-300 flex-1 outline-none"
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                </form>
                <div className="w-12 flex justify-center relative">

                    <button type="button"
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none"
                        onClick={() => setSignOut(!signOut)}
                    >
                        {true ?
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            :
                            < Avatar size="40" round="50px" name="A S" />
                        }
                    </button>
                    {signOut &&
                        <button className=" absolute cursor-pointer text-gray-700 hover:text-gray-500  text-sm font-medium rounded py-2 mt-1 bg-white w-40 z-20 right-1 top-full border focus:outline-none " onClick={handleLogout}>
                            Sign Out
                        </button>
                    }
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-5 overflow-hidden relative pb-5">
                {data.length ?
                    data?.map((recipe, ind) => (
                        <Recipe
                            key={ind}
                            Id={ind}
                            Recipie={recipe.recipe}
                            ClickFn={ClickFn}
                            hideShow={hideShow}
                            setHideShow={setHideShow}
                        />
                    ))
                    :
                    <div className=" col-span-12 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-700">
                            Data NOT Found
                        </h1>
                    </div>
                }
            </div>

            {/* ///////////////////////////////////// Begin Single Recipe Details //////////////////////////////////// */}
            <div>
                <div className={`${hideShow ? "block" : "hidden"} absolute  bg-black bg-opacity-60 inset-0`}></div>
                <div className={`${hideShow ? "right-0" : "-right-full"} transition-all duration-300 fixed z-50 top-0 shadow-2xl bg-white overflow-auto w-60 sm:w-96 h-full`}>
                    {hideShow &&
                        SingleRecipeMemo
                    }
                </div>
            </div>
            {/* ///////////////////////////////////// End Single Recipe Details //////////////////////////////////// */}


        </div >
    )
}

export default Home
