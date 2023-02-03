import React from "react";
import Card from "./Card";
import "./CardBody.css";

type Props = {
  products: any;
  addedItems: any;
  addItem: any;
  removeItem: any;
};

const CardBody: React.FC<Props> = ({
  products,
  addItem,
  removeItem,
  addedItems,
}) => {
  products.map((product: any) => (product.isAdded = true));
  return (
    <section className="card__body">
      {products.map((product: any) => (
        <Card
          key={product.id}
          product={product}
          addedItems={addedItems}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </section>
  );
};

export default CardBody;
