"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList({ name, quantity, category }) {

    const [sortBy, setSortBy] = useState("name", "category");
    const sortedItems = [...itemsData];

    if (sortBy === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    const handleSortByName = () => {
      setSortBy('name');
  };

  const handleSortByCategory = () => {
      setSortBy('category');
  };

      return (
        <>
        <div className="grid gap-2 max-w-xs m-4 p-2">
        <label>Sort by:</label>
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightgreen' : 'pink' }}
        >
        Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightgreen' : 'pink' }}
        >
        Sort by Category
        </button>
      </div>
  
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        )        
      )}

      </>
        
      );
  };