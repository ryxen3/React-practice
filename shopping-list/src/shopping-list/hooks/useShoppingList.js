import { useState } from "react";

// Custom hook that holds all the shopping list state and logic
export function useShoppingList() {
  const [items, setItems] = useState([]); // list starts empty

  // total quantity of all items combined
  const total = items.reduce((sum, item) => sum + item.qty, 0);

  // add a new item with default quantity 1
  const addItem = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    // Check if item already exists 
    const existingItem = items.find(
        (item) => item.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (existingItem) {
        // Already there then just quantity + 1 
        setItems(
            items.map((item) =>
                item.id === existingItem.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    } else {
        // add new item on the list
        setItems([...items, { id: Date.now(), name: trimmedName, qty: 1, done: false }]);
    }
  };

  // toggle an item's done state
  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // increase or decrease an item's quantity (never below 1)
  const changeQuantity = (id, difference) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + difference) }
          : item
      )
    );
  };

  // remove an item from the list
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, total, addItem, toggleDone, changeQuantity, removeItem };
}