"use client"
import { useEffect, useState } from 'react'

export default function Page(){
    const [product, setProduct] = useState([])

    useEffect(async ()=>{
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        console.log(data);
        setProduct(data.products)
    }, [])

    return(
        <div>
            <h1>Product List</h1>
            {
                products.map((item)=>(
                    <h3>Product : {item.title}, Price: {item.price}</h3>
                ))
            }
        </div>
    )
}
