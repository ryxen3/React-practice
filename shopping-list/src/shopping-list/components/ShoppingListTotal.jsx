// Shows the total quantity across all items
export default function ShoppingListTotal({ total }) {
    return (
        <div className="total-row">
            <span className="total-text">Total: {total}</span>
        </div>
    );
}
