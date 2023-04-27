import '@/styles/globals.css'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import React,{ useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {
  {/* <Head>
    <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0'/>
  </Head> */}
  useEffect(()=> {

    return () => {

    }

  }, [])
  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey]= useState([1])
  const addToCart = (item,qty,price)=>{
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const removeFromCart = (item,qty)=>{
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }
  const clearCart = (item)=>{
    setCart([])
  }
  return <>
    <NavBar key={reloadKey} cart={cart}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
    <Footer />
  </>
}
