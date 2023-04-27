import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cart({cart}) {
    const router = useRouter()
    return (
        <div className="min-h-screen">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Cart</h1>
                    </div>
                    <div className="flex flex-wrap">
                        { cart.map((item)=>{
                            return (
                                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{item[0]}</h2>
                                    <p className="leading-relaxed text-base mb-4">price : ₹{item[1]}</p>
                                    <p className="leading-relaxed text-base mb-4">quantity : 1</p>
                                    <Link href={`/product/${item[0]}`} className="text-indigo-500 inline-flex items-center">view all detail
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={()=> {router.push('/checkout')}} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button>
                </div>
            </section>
        </div>
    )
}