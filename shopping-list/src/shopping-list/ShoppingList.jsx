import "./ShoppingList.css";
import { useShoppingList } from "./hooks/useShoppingList";
import AddItemInput from "./components/AddItemInput";
import ShoppingItemList from "./components/ShoppingItemList";
import ShoppingListTotal from "./components/ShoppingListTotal";

// Main component that puts the whole app together
export default function ShoppingList() {
    const { items, total, addItem, toggleDone, changeQuantity, removeItem } =
        useShoppingList();
    return (
        <div className="page">
            <div className="card">
                <AddItemInput onAdd={addItem} />
                <ShoppingItemList
                    items={items}
                    onToggleDone={toggleDone}
                    onChangeQuantity={changeQuantity}
                    onRemove={removeItem}
                />
                <ShoppingListTotal total={total} />
            </div>
        </div>
    );
}