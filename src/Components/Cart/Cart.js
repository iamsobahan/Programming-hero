import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFax, faMailBulk, faMale, faPhone} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {name,position,img,salary,email,details} = props.member
   
    return (
    <div className="cart">
            <img className="img-width" src={img} alt="" />
            <h2>Name : { name}</h2>
            <h4>Position : { position}</h4>
            <h3>Salary: ${ salary}</h3>
            <p>{details.slice(0,70)}</p>
            <h4>Email : { email}</h4>
        <FontAwesomeIcon className="icon" icon={faPhone} />
        <FontAwesomeIcon className="icon" icon={faMailBulk} />
        <FontAwesomeIcon className="icon" icon={faFax} />

        <div>
            <button onClick={()=>props.totalMember(props.member)} className="btn"><FontAwesomeIcon icon={faMale} /> add member</button>
        </div>
    </div>
    );
};

export default Cart;