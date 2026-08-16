export default function QuantityControl({ quantity, onDecrease, onIncrease }) {
    return (
        <div className="quantity-control">
            <button className="quantity-btn" onClick={onDecrease}>
                &lt;
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-btn" onClick={onIncrease}>
                &gt;
            </button>
        </div>
    );
}