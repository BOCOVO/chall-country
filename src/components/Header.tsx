import React from "react"
import MoonOutline from "react-ionicons/lib/MoonOutline"

const Header = () => {

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

    return  (
        <header className=" bg-white dark:bg-dark-blue shadow-md py-3 px-4 sm:px-10 md:px-16 flex items-center justify-between">
            <h1 className=" font-semibold">Where in the world?</h1>
            <button onClick={toggleTheme} className="flex px-3 py-2 rounded-md hover:bg-very-light-gray dark:hover:bg-very-dark-blue-dark" aria-label="Change theme to Dark Mode">
                <MoonOutline />
                <span className="ml-2">Dark Mode</span>
            </button>
        </header>
    )


}

export default Header