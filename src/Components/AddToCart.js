import React, { useState } from "react";

function AddToCart({ image, setImage,setCart }) {
  const removeItem = (item) => {
    setImage(image.filter((it)=>{
        return item!=it
    }))
    setCart((prevState)=>{
      return prevState-1
    })
  };
  let details = image.map((item) => {
    return (
      <div className="add-to-cart" onClick={() => removeItem(item)}>
        <img className="add-to-cart-image" src={item.image}></img>
        <div className="add-to-cart-text">{item.name}</div>
      </div>
    );
  });
  return (
    <div className="add-to-cart-container">
      <h4 className="add-to-cart-heading">Cart</h4>
      {details}
    </div>
  );
}

export default AddToCart;
