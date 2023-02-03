import React from "react";
import "./Button.css";

type Props = {
  num: number;
  click: any;
};

const Button: React.FC<Props> = ({ num, click }): any => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      You Added <span>{num}</span> {num <= 1 ? "item" : "items"}
    </button>
  );
};

export default Button;
