import React, { useContext } from "react";
import { AllMenuDishes } from "./Menu";

function Popup(props) {
  const menu = useContext(AllMenuDishes);
  let popupDetails = menu
    .filter((item) => {
      return item.strMeal == props.meal;
    })
    .map((item) => {
      return (
        <div className="popup-container">
          <div className="popup-image-container">
            <img className="popup-image" src={item.strMealThumb}></img>
            <div className="popup-content">
              <div className="popup-category">{item.strCategory}</div>
            </div>
            <h3 className="popup-title">{item.strMeal}</h3>
            <div className="popup-instructions">{item.strInstructions}</div>
            <div className="popup-tags">{item.strIngredient1}</div>
            <div className="popup-tags">{item.strIngredient2}</div>
            <div className="popup-tags">{item.strIngredient3}</div>
            <div className="popup-tags">{item.strIngredient4}</div>
            <div className="popup-button-container">
              <button
                className="popup-button"
                onClick={() =>
                  props.getDetails(
                    item.strMealThumb,
                    item.strMeal,
                    props.setShowPopup(false)
                  )
                }
              >
                Order
              </button>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="popup">
      {popupDetails}
      <button className="popup-exit" onClick={props.closePopupHandler}>
        Exit
      </button>
    </div>
  );
}

export default Popup;
