import React, { useEffect, useState } from 'react'
import './style.css/Product.css'
import { useDispatch } from 'react-redux'
import {add} from "../store/cartSlice"

const Products = () => {
    const[products,setproducts]=useState([])
     const dispatch=useDispatch();

       const fetchProducts=async()=>{
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        // console.log(data)
        setproducts(data)
       }

      useEffect(()=>{
        fetchProducts()
      },[])
 
     
        const handleAdd=(payload)=>{
          dispatch(add(payload))
        }
       
   
    return (
    <div className='productswrapper'>
       {products.map((product)=>{
        return(
            <div className='card'>
              <div className='card-image'>
                <img src={product.image} alt=""/>
              </div> 
              <div className='card-body'>
                <h4 className='product-title'>{product.title}</h4>
                <h6 className='product-price'>{product.price}</h6>
                <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
              </div>
            </div>
        )
       })}
    </div>
  )
}

export default Products