import React, { useState } from 'react'

export default function MyComponent() {

const [name, setName]=useState("Guest");
const [quantity, setQuantity]= useState(0);
const [comment, setComment]=useState("");
const [payment, setPayment]=useState("");
const [shipping, setShipping]=useState("Delivery")

function  handleNameChange(event){
    setName(event.target.value)
}

function handleQUantityChange(event){
setQuantity(event.target.value)
}

function handleCommentChange(event){
    setComment(event.target.value)
}

function handlePaymentMethod(event){
    setPayment(event.target.value)
}

function handleShipping(event){
    setShipping(event.target.value)
}

  return (
    <div>
        <input type='text'  value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>
        <br></br>


        <input type='number' onChange={handleQUantityChange} value={quantity}/>
        <p>Quantity:{quantity}</p>
        <br></br>

        <textarea type="text"  id="" onChange={handleCommentChange} value={comment}></textarea>
      <p>Comment:{comment}</p>
      <br></br>

      <select value={payment} onChange={handlePaymentMethod}>
        <option value="">Select Option</option>
        <option value="visa">Visa</option>
        <option value="master">Master Card</option>
        <option value="giftcard">Gift Card</option>
      </select>
      <p>Payment Method: {payment}</p>
<br></br>

<label>
    <input type="radio" value="Delivery" 
    checked={shipping==="Delivery"}
    onChange={handleShipping} />
    Delivery
</label>

<br/>

<label>
    <input type="radio" value="Pickup" 
        checked={shipping==="Pickup"}
    onChange={handleShipping} />
    Pickup
</label>
<p>Shipping: {shipping}</p>

    </div>
  )
}
