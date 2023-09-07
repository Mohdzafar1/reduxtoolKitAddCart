import React from 'react'
import "./style.css/Cart.css"
import "../Components/Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import {deleteSingleData,deleteAllData} from  "../store/cartSlice"

const Cart = () => {
   const data=useSelector((state)=>state.cards)
    const dispatch=useDispatch()
    const {id}=data;
    
   const deleteUser=(id)=>{
       dispatch(deleteSingleData(id))
   }
    const deleteAll=(id)=>{
        dispatch(deleteAllData(id))
    }
  return (
    <div>
      <h1>Cart List</h1>
      <div className='productswrapper'>
       {data.map((product,id)=>{
        return(
            <div className='card'>
              <div className='card-image'>
                <img src={product.image} alt=""/>
              </div> 
              <div className='card-body'>
                <h4 className='product-title'>{product.title}</h4>
                <h6 className='product-price'>{product.price}</h6>
                <button onClick={()=>deleteUser(id)} className='btn'>Delete</button>
              </div>
            </div>
        )
       })}
    </div>
     <button onClick={()=>deleteAll(id)}>Delete All Product</button>
    </div>
  )
}

export default Cart