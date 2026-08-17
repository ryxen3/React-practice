import ShoppingItem from "./ShoppingItem";

// Renders all items, or a message if the list is empty
export default function ShoppingItemList({ items, onToggleDone, onChangeQuantity, onRemove }) {
    if (items.length === 0) {
        return (
            <div className="items">
                <p className="empty-state">The list is empty.</p>
            </div>
        );
    }

    return (
        <div className="items">
            {items.map((item) => (
                <ShoppingItem
                    key={item.id}
                    item={item}
                    onToggleDone={onToggleDone}
                    onChangeQuantity={onChangeQuantity}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}