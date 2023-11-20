"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getItems, addItem } from "../_services/shopping-list-service";


const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);


  // Function to load shopping list items for the current user
  const loadItems = async () => {
    try {
      if (user) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // useEffect hook to load items when the component is mounted
  useEffect(() => {
    loadItems();
  }, [user]); // Load items when the user changes

  // Function to handle adding an item to the shopping list
  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const newItemWithId = { ...newItem, id: newItemId };
      setItems([...items, newItemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  
  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.trim(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };
  
    // Check if the user is not logged in and redirect to the landing page
    useEffect(() => {
      if (!user) {
        router.push("/week8/page"); // Replace with your landing page URL
      }
    }, [user]);

  return (
    <div className="flex">
      <div className="w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
       </div>
        <div className="w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}     
        </div>
    </div>
  );
};

export default Page;