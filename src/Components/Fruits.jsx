import React, { useState } from "react";

export default function Fruits() {
    const [fruits, setFruits] = useState([]);
    const [newFruit, setNewFruit] = useState("");
    const [selectedFruits, setSelectedFruits] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    function handleAddFruit() {
        if (newFruit.trim()) {
            setFruits([...fruits, newFruit]);
            setNewFruit(""); // Clear input after adding
        }
    }

    function handleRemoveSelected() {
        setFruits(fruits.filter(fruit => !selectedFruits.includes(fruit)));

        // Reset selection automatically after deletion
        setSelectedFruits([]);

    }

    function toggleSelection(fruit) {
        setSelectedFruits(prevSelected => {
            if (prevSelected.includes(fruit)) {
                return prevSelected.filter(f => f !== fruit);
            } else {
                return [...prevSelected, fruit];
            }
        });

    }

    function handleToggleCheckboxes() {
        setShowCheckboxes(prev => !prev);
    }

    return (
        <div>
            <h1>List of Fruits</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {showCheckboxes && (
                            <input
                                type="checkbox"
                                checked={selectedFruits.includes(fruit)}
                                onChange={() => toggleSelection(fruit)}
                            />
                        )}
                        {fruit}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newFruit}
                onChange={(e) => setNewFruit(e.target.value)}
            />
            <button onClick={handleAddFruit}>Add Fruit</button>
            <button onClick={handleToggleCheckboxes}>
                Select
            </button>
            {selectedFruits.length > 0 && (
                <button onClick={handleRemoveSelected}>Delete Selected</button>
            )}
        </div>
    );
}