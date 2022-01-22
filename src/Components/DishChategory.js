import React, { useState, useContext } from "react";
import DishNotice from "./DishNotice";
import Pagination from "./Pagination";
import CardDishes from "./CardDishes";
import { AllMenuDishes } from "./Menu";

function DishChategory(props) {
  const menu = useContext(AllMenuDishes);

  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let showTheseDishesNow = filtered.slice(indexOfFirstDish, indexOfLastDish);

  const filteredDishes = (items) => {
    props.setSpecaialCategory([]);
    setActive(items);
    let newDishes = menu
      .filter((category) => {
        return items === category.strCategory;
      })
      .map((item) => {
        return <CardDishes item={item} />;
      });

    setFiltered(newDishes);
  };

  let specailizedCategoryFood = props.specailCategoryFood.map((item, index) => {
    if (index < 12) {
      return (
        <div className="filtered-item">
          <img className="filtered-item-image" src={item.strMealThumb}></img>
          <div className="filtered-item-text">{item.strMeal}</div>
        </div>
      );
    }
  });

  let categories = props.dishChategories.map((item) => {
    return (
      <div
        onClick={() => filteredDishes(item.strCategory)}
        className={item.strCategory === active ? "category active" : "category"}
      >
        <div>{item.strCategory}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="categories-container">{categories}</div>
      {filtered.length != 0 || specailizedCategoryFood.length != 0 ? (
        <div className="filtered-item-container">{showTheseDishesNow}</div>
      ) : (
        <DishNotice />
      )}
      <div className="filtered-item-container">{specailizedCategoryFood}</div>
      <Pagination
        filtered={filtered}
        setFiltered={setFiltered}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default DishChategory;
