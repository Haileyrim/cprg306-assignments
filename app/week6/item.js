import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="text-2xl border border-yellow-200  bg-pink-100 font-bold text-gray-400 w-full max-w-xs m-4 p-2">
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;