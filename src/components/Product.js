import React from 'react'
import {useState} from 'react'

export default function Product({product,basket,setBasket}) {
 
 
  const basketItem=basket.find(item=>item.id=== product.id)
 
  const addBasket = ()=>{
   const checkBasket =basket.find(item=>item.id ===product.id)
   if(checkBasket){
    checkBasket.amonunt +=1
    setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
   }
   else{
     setBasket([...basket, {
       id: product.id,
       amonunt :1
     }])
   }
  }
  return (
    <>
    <div className="product" >
    <h3>{product.title}</h3>
      <div className='price'>${product.price}</div>
      <button>Sat</button>
      <span className='amount'>{basketItem && basketItem.amonunt || 0}</span>
      <button onClick={addBasket}>Satın al</button>
    </div>

    </>
  )
}
