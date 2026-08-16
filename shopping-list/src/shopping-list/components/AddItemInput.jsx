import { useState } from "react";

// Input box and button for adding a new item
export default function AddItemInput({ onAdd }) {
    const [value, setValue] = useState("");

    // check if there is text
    const isActive = value.trim().length > 0;

    // add the value and clear the box
    const handleSubmit = () => {
        onAdd(value);
        setValue("");
    };

    return (
        <div className="add-row">
            <div className="add-input-wrap">
                <input
                    className="add-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="Add an item..."
                />
                <button className={`add-btn ${isActive ? "active" : ""}`} onClick={handleSubmit}>
                    +
                </button>
            </div>
        </div>
    );
}