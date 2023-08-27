import { useState } from "react";
import Header from "./components/Header";
import menus from "./data";
import FoodItem from "./components/FoodItem";

const allCategories = [
  "all",
  ...new Set(menus.map((foodItem) => foodItem.category)),
];

console.log(allCategories);
const App = () => {
  const [foodItems, setFoodItems] = useState(menus);
  const [categories, setCategories] = useState(allCategories);

  function handleFilter(category) {
    if (category === "all") {
      setFoodItems(menus);
      return;
    }
    const filteredCategories = menus.filter(
      (foodItem) => foodItem.category === category
    );
    setFoodItems(filteredCategories);
  }

  return (
    <main>
      <section className="menu">
        <Header
          categories={categories}
          handleFilter={handleFilter}
        />
        <div className="section-center">
          {foodItems &&
            foodItems.map((foodItem) => (
              <FoodItem
                {...foodItem}
                key={foodItem.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
export default App;
