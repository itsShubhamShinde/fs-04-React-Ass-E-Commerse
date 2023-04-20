import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetAPIdata,SetAddToCart } from '../Redux/MoviSlice'
import '../Style/Product.css'

const Product = () => {
  const dispatch = useDispatch()
  const { Movidata } = useSelector((state) => state.MoviDetails)

  useEffect(() => {
    if (Movidata.length === 0) {
      apifetch()
    }
  }, [])

  const apifetch = async () => {
    const responce = await fetch("https://fakestoreapi.com/products")
    const data = await responce.json()
    dispatch(SetAPIdata(data))
  }

  return (
    <div className='productOuterDiv'>
      {
        Movidata.lenght !== 0 ? <div className='productDetails'>
          {
            Movidata.map((ele) => {
              return <div className='cart'>
                <h3>{ele.category}</h3>
                <img src={ele.image} alt="" width="70%" height="60%" />
                <p><b>${ele.price}</b></p>
                <button onClick={()=> dispatch(SetAddToCart(ele))}>AddToCart</button>
              </div>
            })
          }
        </div>

          : <h2>Data not Present</h2>
      }

     
    </div>
  )
}

export default Product