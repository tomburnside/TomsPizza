import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from '../Components/Success'
export default function Checkout({subTotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
      console.log(token);
      dispatch(placeOrder(token , subTotal))
       }

    return (
        <div>

            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}
            
            <StripeCheckout
            amount={subTotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51LdYQiHskW1Bwjg4aJbi3Pp2cnjFjMkzdNMDa2Gh0FiTrPrg4JJ9MDeZdHYbAhzaSOyEoBtzSTkNEKEPUnXEKTcQ00JFXihsdr'
            currency='AUD'
            >

                  
                  <button className='btn'>Pay Now</button>

            </StripeCheckout>
            
        </div>
    )
}