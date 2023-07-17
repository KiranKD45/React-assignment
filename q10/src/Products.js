import React from 'react'
import "./App.css"
import { useState, useEffect } from 'react'
import axios from "axios"

const Products = () => {
    const[loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=>{
        setLoading(true)
     axios(
        {
            method:"GET",
            url:"https://fakestoreapi.com/products"
        }
     ).then(res =>{
        console.log(res.data)
        setData(res.data)
     }).catch(e=> console.log(e))
     .finally(()=>setLoading(false))

    }, [])
  return (
    <>
     {loading && 
        (<div> 
            {" "}
            <h1>Loading...</h1></div>)}
  {
    data.map((product)=>{
        return(
        <div key={product.id} className='cart-adjust'>
            <div className='img-div'><img src={product.image} alt='#'/></div>
            <div><p>{product.title}</p></div>
            <div><p className='price'>{`Price:${product.price}`}</p></div>
            <div> <button>Add to cart</button>
            <button>Buy Now</button> </div>

        </div>)
    })
  }
    </>
  )

}

export default Products