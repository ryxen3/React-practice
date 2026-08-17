export default function QuantityControl({ quantity, onDecrease, onIncrease }) {
    return (
        <div className="quantity-control">
            <button className="quantity-btn" onClick={onDecrease}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-btn" onClick={onIncrease}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}