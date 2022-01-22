import React from "react";

function CardDishes(props) {
  return (
    <div className="menu-item">
      <a onClick={()=>props.showPopupHandler(props.item.strMeal)}>
        <img className="menu-item-image" src={props.item.strMealThumb}></img>
        <h4 className="menu-item-text">{props.item.strMeal}</h4>
      </a>
    </div>
  );
}

export default CardDishes;
