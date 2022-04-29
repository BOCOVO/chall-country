import React from "react"


const Footer = () => {

    return (
        <footer className=" bg-white dark:bg-dark-blue mt-14 md:mt-8 py-3  px-2 text-xs bg-pale-orange" >
            <p className=" text-center">
                This is a challenge I found on 
                <a className=" font-bold hover:underline mx-1 " href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6">
                 Frontend Mentor.
                </a>Realized with 💖💖💖 , React , Typescript and Tailwind par 
                <a rel="noreferrer" target="_blank" href="https://github.com/BOCOVO/" className=" font-bold hover:underline mx-1 ">
                Juste Bocovo.
                </a>
                <a rel="noreferrer" target="_blank" aria-label="My linkedin profile" className=" mx-2" href="https://www.linkedin.com/in/juste-bocovo-84a5a51a2/">
                    <img alt="Linkedin" className="w-4 h-4 inline" src="https://www.svgrepo.com/show/144550/linkedin.svg" />
                </a>
                <a rel="noreferrer" target="_blank" aria-label="My twitter profile" className=" mx-2" href="https://twitter.com/juste_bocovo">
                    <img alt="Twitter" className="w-4 h-4 inline" src="https://www.svgrepo.com/show/144549/twitter.svg" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/BOCOVO/chall-country">
                    Project Github
                </a>
            </p>
        </footer>
    )
}

export default Footer