import React from "react";

export default function Category({category}) {
    return (
        <div className="min-h-screen">
            {console.log(category)}
            {category.data.map((item)=>{
                return (
                    <section class="text-gray-600 body-font">
                        <div class="container py-2 mx-auto ">
                            <div class="lg:w-1/2 md:w-full">
                                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-stone-100">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{item.attributes.name}</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    let a = await fetch("http://127.0.0.1:1337/api/categories")
    let category = await a.json()
    console.log(category);
    return {
        props : { category : category},
    }
  }