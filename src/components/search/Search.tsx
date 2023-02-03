import React from "react";
import "./Search.css";
import { CartItemType } from "../../types/CartItemType";
type Props = {
  value: any;
  onChangeData: any;
};
const Search: React.FC<Props> = ({ value, onChangeData }) => {
  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;
