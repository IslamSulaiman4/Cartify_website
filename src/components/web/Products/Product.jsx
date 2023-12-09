import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/FeatureCart.jsx';

export default function Products() {
  const {addToCartContext}=useContext(CartContext);

    const {productID}=useParams();
   
    const getProduct= async ()=>{
      
      const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/${productID}`);
      return data.product;
  
    }
  const{data,isLoading}= useQuery('product_details',getProduct);

  const addtoCart =async (productID)=>{
    const res= await addToCartContext(productID);
    //return res;
  }

   if(isLoading){
    return <div> Loading ...</div>
   }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {data.subImages.map((img,index)=>
          <div key={index}>
            <img className='py-1' src={img.secure_url} />
          </div>
          )}
          <div className="col-lg-8">
            <h2>{data.price}</h2>
            <p>{data.name}</p>
            <button className='btn btn-outline-info' onClick={()=>addtoCart(data._id)} >Add to cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}
