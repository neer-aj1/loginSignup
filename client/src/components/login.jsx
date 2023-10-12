import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'

const login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = () => {
        e.preventDefault();
        
    }
  return (
    <>
    <div className="flex flex-col space-y-9 justify-center items-center h-screen">
                <div>
                    <div className="flex w-full items-start justify-start">
                        <h1 className="text-3xl mb-7" >Login</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-72" autoComplete='off'>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" onChange={(e) => {setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
    </>
  )
}

export default login