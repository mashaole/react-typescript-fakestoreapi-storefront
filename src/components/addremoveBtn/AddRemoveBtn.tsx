import React from "react";

type Props = {
  isAdded: any;
  addItem: any;
  product: any;
  removeItem: any;
};

const AddRemoveBtn: React.FC<Props> = ({
  isAdded,
  addItem,
  product,
  removeItem,
}) => {
  return (
    <button
      className={isAdded ? "add-item-btn" : "remove-item-btn"}
      onClick={() => {
        console.log(product);
        isAdded ? addItem(product) : removeItem(product);
      }}
    >
      {isAdded ? "ADD " : "CANCLE"}
    </button>
  );
};

export default AddRemoveBtn;
