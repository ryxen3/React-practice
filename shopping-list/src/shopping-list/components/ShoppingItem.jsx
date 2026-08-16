import QuantityControl from "./QuantityControl";

// One row: checkbox, name, quantity control, delete button
export default function ShoppingItem({ item, onToggleDone, onChangeQuantity, onRemove }) {
    const { id, name, qty, done } = item;
    return (
        <div className="item-row">
            <button className={`checkbox ${done ? "checked" : ""}`} onClick={() => onToggleDone(id)}>
                {done && "✔"}
            </button>
            <span className={`item-name ${done ? "done" : ""}`}>{name}</span>
            <QuantityControl
                quantity={qty}
                onDecrease={() => onChangeQuantity(id, -1)}
                onIncrease={() => onChangeQuantity(id, 1)}
            />
            <button className="delete-btn" onClick={() => onRemove(id)}>
                X
            </button>
        </div>
    );
}