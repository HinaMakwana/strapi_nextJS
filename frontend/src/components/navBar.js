import React from "react";
import Link from 'next/link'

export default function NavBar({cart}) {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-8' src='/shopping-logo-svgrepo-com.svg'></img>
                    <span className="ml-3 text-xl">Shopping App</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href='/products' className="mr-5 hover:text-gray-900">Products</Link>
                    <Link href='/contact' className="mr-5 hover:text-gray-900">Contact Us</Link>
                    <Link href='/cart' className="mr-5 hover:text-gray-900">Cart({cart.length})</Link>
                </nav>
                <button className=" items-center bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">Login
                </button>
            </div>
        </header>
    );
}
