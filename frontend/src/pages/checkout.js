import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function checkout({cart}) {
    const [subtotal, setSubtotal] = useState(0)
    const [form, setForm] = useState({name:"",email:"",phone:"",address:""})
    useEffect(()=>{
        let total = 0
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            total = total + cart[index][1]
        }
        setSubtotal(total)
    },[])
    const handleChange = (e)=> {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const submit = async ()=> {
        let orderId = 'id' + Math.floor(1000000* Math.random())
        const url = `http://127.0.0.1:1337/api/orders/pretransaction`
        const a = await fetch(url, {
            method : 'POST',
            body:JSON.stringify({id: orderId, amount: subtotal, ...form, cart:cart})
        })
        const content = await a.json()
        console.log(content);
        var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
        "orderId": orderId,
        "token": content.body.txnToken,
        "tokenType":"TXN_TOKEN",
        "amount": subtotal
        },
        "handler": {
        "notifyMerchant": function(eventName,data){
        console.log("notifyMerchant handler function called");
        console.log("eventName => ",eventName);
        console.log("data => ",data);
        }
        }
        };
        if(window.Paytm && window.Paytm.CheckoutJS){
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error){
            console.log("error => ",error);
            });
        }
    }
    return (
        <div className="container min-h-screen m-auto">
            <Script type="application/javascript" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} onload={submit} crossorigin="anonymous"></Script>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
                    <h2 className="text-2xl font-bold">Cart</h2>
                    <div className="cart">{cart.length?`Your cart details are as follows`:`your cart is empty!.`}</div>
                    <ul>
                    {cart.map((item)=>{
                        return <li>
                            {item[0]} with a price if {item[1]}
                        </li>
                    })}
                    </ul>
                    subtotal : {subtotal}
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input onChange={handleChange} type="text" value={form.name} id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={handleChange} type="email" value={form.email} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input onChange={handleChange} type="text" value={form.phone} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <textarea onChange={handleChange} id="address" value={form.address} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <button onClick={submit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay now</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}