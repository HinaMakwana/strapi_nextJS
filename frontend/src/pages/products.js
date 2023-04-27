import Link from "next/link"

export default function Products({product,addToCart}) {
    /* product.data.map((item)=> {
        console.log(item.attributes.price)
    }) */
    return (
        <div className='container m-auto'>
            <section className="text-gray-600 body-font px-20">
                <div className="container px-5 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full md:mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - Myshop</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {product.data.map((item)=>{
                            return (
                            <div key={item.attributes.slug} className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-60 rounded m-auto mb-8" src= {"http://localhost:1337"+`${item.attributes.img.data && item.attributes.img.data.attributes.url}`} alt={item.attributes.name} />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                                <h2 className="text-lg text-indigo-500 font-medium title-font mb-4">{item.attributes.name}</h2>
                                <div className="hidden bg-red-800 bg-yellow-800 bg-purple-800 bg-indigo-800 bg-blue-800 bg-pink-800"></div>
                                <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none "+ `bg-${item.attributes.color}-800`}></button>
                                <p className="leading-relaxed text-base">{item.attributes.description}</p>
                                <Link href={`/product/${item.attributes.slug}`} ><button className=" items-center bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">Buy now</button></Link>
                                <button onClick={()=> {addToCart(item.attributes.slug,1, item.attributes.price)}} className="items-center bg-indigo-400 border-0 py-1 px-3 mx-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">Add to cart</button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
  }

  export async function getServerSideProps(context) {
    let a = await fetch("http://127.0.0.1:1337/api/products?populate=*")
    let products = await a.json()
    return {
        props : { product : products},
    }
  }