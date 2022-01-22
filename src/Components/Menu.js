import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Header from "./Header";
import SpecialDish from "./SpecialDishes";
import DishChategory from "./DishChategory";
import Loading from "./Loading";

export const AllMenuDishes = React.createContext();

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [specaialCategory, setSpecaialCategory] = useState([]);
  const [cart, setCart] = useState(0);

  async function getLetterUrl() {
    setLoading(true);
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(url);
    let json = await response.json();
    setMenu(json.meals);
    setLoading(false);
  }

  async function getMealChategory() {
    setLoading(true);
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(url);
    let json = await response.json();
    setCategories(json.categories);
    setLoading(false);
  }

  async function getSpecailChategory() {
    setLoading(true);
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(url);
    let json = await response.json();
    setSpecaialCategory(json.meals);
    setLoading(false);
  }

  useEffect(() => {
    getLetterUrl();
    getMealChategory();
    getSpecailChategory();
  }, []);

  return (
    <AllMenuDishes.Provider value={menu}>
      <div>
        <Header cart={cart} />
        <Hero />
        {!loading ? <SpecialDish setCart={setCart} /> : <Loading />}
        {!loading ? (
          <DishChategory
            specailCategoryFood={specaialCategory}
            setSpecaialCategory={setSpecaialCategory}
            dishChategories={categories}
          />
        ) : null}
      </div>
    </AllMenuDishes.Provider>
  );
};

export default Menu;
