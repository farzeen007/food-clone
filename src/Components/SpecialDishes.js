import React, { useState, useContext } from "react";
import CardDishes from "./CardDishes";
import Popup from "./Popup";
import { AllMenuDishes } from "./Menu";
import AddToCart from "./AddToCart";

function SpecialDish(props) {
  const menu = useContext(AllMenuDishes);
  const [item, setItem] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState([]);
  const showPopupHandler = (meal) => {
    setShowPopup(true);
    setItem(meal);
  };
  const closePopupHandler = () => {
    setShowPopup(false);
  };
  const getDetails = (img, name) => {
    setImage([...image, { image: img, name: name }]);
    props.setCart((prevState)=>{
      return prevState+1
    })
  };
  let MenuItems = menu.map((item, index) => {
    if (index < 8) {
      return <CardDishes showPopupHandler={showPopupHandler} item={item} />;
    }
  });
  return (
    <div className="special-dishes">
      <AddToCart image={image} setImage={setImage} setCart={props.setCart}/>
      <h2>Our Special Dishes</h2>
      {showPopup && (
        <Popup
          getDetails={getDetails}
          meal={item}
          closePopupHandler={closePopupHandler}
          setShowPopup={setShowPopup}
        />
      )}
      <div className="special-dishes-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor
        in reprehenderit.
      </div>
      <div className="menu-item-container">{MenuItems}</div>
    </div>
  );
}

export default SpecialDish;
