import { useEffect, useState } from "react";
import LoGo from "../assets/react.svg";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import Button from "../components/button/Button";
import CardBody from "../components/cards/CardBody";
import { CartItemType } from "../types/CartItemType";
import AddProducts from "../components/addproducts/AddProducts";

import "./Home.css";

const Home = () => {
  const [items, setItem] = useState([] as CartItemType[]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function changingSearchData(e: any) {
    setSearchValue(e.target.value);
  }

  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item: any) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([item, ...itemArr]);
  }

  function removeItem(item: CartItemType): void {
    const newItems = addedItems.filter(
      (addedItem: any) => addedItem.id !== item.id
    );
    setAddedItem(newItems);
  }

  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search value={searchValue} onChangeData={changingSearchData} />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}

        {isLoading ? (
          <div className="loading_logo_container">
            <img className="loading__logo" src={LoGo} alt="" />
            <h1>Loading Products ...</h1>
          </div>
        ) : (
          <CardBody
            products={itemsFilter}
            addedItems={addedItems}
            addItem={addItem}
            removeItem={removeItem}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
