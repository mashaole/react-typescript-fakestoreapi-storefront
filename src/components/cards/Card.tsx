import React, { useEffect } from "react";
import "./Card.css";
import { useState } from "react";
import { CartItemType } from "../../types/CartItemType";

type Props = {
  product: CartItemType;
  addedItems: any;
  addItem: any;
  removeItem: any;
};

const Card: React.FC<Props> = ({
  product,
  addedItems,
  addItem,
  removeItem,
}) => {
  const [isAdded, setIsAdded] = useState(true);

  const item = addedItems.filter(
    (addedItem: any) => addedItem.id == product.id
  );

  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  return (
    <article className="card">
      <img className="card__img" src={product.image} alt="" loading="lazy" />
      <div className="product-info">
        <div>
          <h2>{product.title}</h2>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
        </div>
        <div className="card-price-add">
          <span>Price : ${product.price}</span>
          <button
            className={isAdded ? "add-item-btn" : "remove-item-btn"}
            onClick={() => {
              isAdded ? addItem(product) : removeItem(product);
              setIsAdded(!isAdded);
            }}
          >
            {isAdded ? "ADD " : "CANCLE"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
