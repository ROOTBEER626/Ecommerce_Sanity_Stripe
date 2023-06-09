import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill} from 'react-icons/bs';

import { runFireworks } from '../lib/utils';

import { useStateContext } from '../context/StateContext';

const Sucess = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);
  return (
    <div className='sucess-wrapper'>
        <div className='sucess'>
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order!</h2>
            <p className="email-msg">Check your email inbox for the receit.</p>
            <p className="description">If you have any questions please email  
                <a className="email" href="mailto:vinagrg26@gmail.com">
                       vinagrg26@gmail.com
                </a>
            </p>
            <Link href='/'>
                <button type="button" width="300px" className="btn">Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Sucess