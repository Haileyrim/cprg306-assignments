// Import necessary modules
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve items for a specific user from Firestore
export const getItems = async (userId) => {
  try {
    const items = [];
    const userDocRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(userDocRef);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

// Function to add a new item to a specific user's list of items in Firestore
export const addItem = async (userId, item) => {
  try {
    const userDocRef = collection(db, "users", userId, "items");
    const newDocRef = await addDoc(userDocRef, item);

    return newDocRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};
