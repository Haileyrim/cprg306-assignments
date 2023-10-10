"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (item) => {
        item.preventDefault();
    
        const newItem = { 
            name, 
            quantity, 
            category
         };
        console.log(newItem);
    };

    setEventCreated(true);

    setName("");
    setQuantity("");
    setCategory("");
  };
    
    const handleNameChange = (item) => {
        setName(item.target.value);
      };
    
      const handleQuantityChange = (item) => {
        setDate(item.target.value);
      };
    
      const handleCategoryChange = (item) => {
        setLocation(item.target.value);
      };
    
    return (
      <main>
        <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
          {itemCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Item Created
          </div>
        )}


        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-5">Add New Item</h1>
        <form   onSubmit={handleSubmit}>


        <span className="text-gray-800 ">Item Name:</span>
        <label className="block mb-4">
            <input
            required
            className="border border-gray-400 p-2 m-2"
            type="text"
            value={name}
            onChange = {handleNameChange}
            />
        </label>


        <span className="text-gray-800">Quantity:</span>
        <label className="block mb-4">
            <input
            required
            className="border border-gray-400 p-2 m-2"
            type="number"
            value={quantity}
            onChange = {handleQuantityChange}
            />
        </label>


        <span className="text-gray-800">Category:</span>
        <label className="block mb-4">
            <select className="border border-gray-400 p-2 m-2">
            required
                className="border border-gray-400 p-2 m-2"
                value={category}
                onChange = {handleCategoryChange}  
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Bakery">Bakery</option>
                <option value="Canned Goods">Canned</option>
                <option value="Frozen Foods">Frozen</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Dry Goods">Dry</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            </label>


            <button 
              type = "submit" 
              className=" hover:bg-sky-100 border border-black p-2 m-2 block w-10">
            +
            </button>
        </form>
        </div>
        </div>
        </main>
    );  
