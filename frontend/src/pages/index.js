import Link from "next/link"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <div className='container min-h-screen m-auto'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome to our website</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Link href="/cart"> <img  src="cart.svg" className="h-5 w-5"/></Link>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Cart</h2>
                <p className="leading-relaxed text-base">Add your products into cart and show details of products.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Link href="/products"><img  src="product.svg" className="h-6 w-6"/></Link>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Products</h2>
                <p className="leading-relaxed text-base">show list of all the products with description and price.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Link href="/category"><img  src="category.svg" className="h-5 w-5"/></Link>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Category</h2>
                <p className="leading-relaxed text-base">List all categories like children,men,woman,food,skin care etc.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img  src="order.svg" className="h-5 w-5"/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">orders</h2>
                <p className="leading-relaxed text-base">user can see order which can ordered you.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img  src="favourite.svg" className="h-5 w-5"/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">favourites</h2>
                <p className="leading-relaxed text-base">Add your favourites product in this</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img  src="icon.svg" className="h-5 w-5"/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">List</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street.</p>
              </div>
            </div>
          </div>
          <button onClick={()=> {router.push('/products')}} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">start shopping</button>
        </div>
      </section>
    </div>
  )
}
