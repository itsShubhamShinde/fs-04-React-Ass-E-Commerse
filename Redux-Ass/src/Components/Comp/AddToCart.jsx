import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Style/Addtocart.css'
import { SetAddToCart ,DeleteAddToCart} from '../Redux/MoviSlice';

const AddToCart = () => {
  const { Addtocart } = useSelector((state) => state.MoviDetails)
  const dispatch = useDispatch()
 
  const deletefnc = (id)=>{
    const result = Addtocart.filter((ele)=>{
       
      return ele.id !== id
    })
    dispatch(DeleteAddToCart(result))
   }
  return (
    <div className='AddtocartOuterDiv'>
      <h1>Add to Cart items</h1>
      <div className='lowerDiv'>

        {
          Addtocart.length === 0 ? <div><h1>Add to Cart is Empty</h1></div> :
            <div className='wrapperDiv'>
              {Addtocart.map((ele) => {
                return <div className='AddtocartItems'>
                  <div className='imageDiv'>
                    <img src={ele.image} alt="" width="100%" height="100%" />
                  </div>
                  <div className='detailDiv'>
                    <h2 style={{ color: "green" }}>{ele.category}</h2>
                    <h1 style={{ color: "black" }}>{ele.title}</h1>
                    <h6>{ele.description}</h6>
                  </div>
                  <div className='priceDiv'>
                    <span>
                      <h2>Price : </h2>
                      <h2 style={{ color: "red" }}>${ele.price}</h2>
                    </span>
                    <button onClick={()=>{deletefnc(ele.id)}}>Delete</button>
                  </div>
                </div>
              })}
            </div>
        }

       
      </div>
    </div>
  )
}

export default AddToCart