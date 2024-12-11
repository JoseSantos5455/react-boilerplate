import React, { useState } from "react";

const data = [
    { id: 1, name: "apple", checked: false },
    { id: 2, name: "banana", checked: false },
    { id: 3, name: "celery", checked: false },
    { id: 4, name: "dog", checked: false },
    { id: 5, name: "elephant", checked: false },
    { id: 6, name: "fish", checked: false },
];

export default function SelectForm() {
    const [items, setItems] = useState(data);

    const isAllSelected = items.every((item) => item.checked);
    // console.log("isAllSelected", isAllSelected)

    const handleSelectAll = () => {
        setItems(
            items.map((item) => {
                return { ...item, checked: !isAllSelected };
            })
        );
    };

    const handleCheck = (id) => {
        // creating a new array
        // copy every item from the old array
        // if the id matches, change the checked value

        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked };
                } else {
                    return item;
                }
            })
        );

        // const newItems = [];
        // items.forEach(item => {
        //     if (item.id === id) {
        //         const newItem = { ...item, checked: !item.checked }
        //         newItems.push(newItem)
        //     } else {
        //         newItems.push(item)
        //     }
        // })
        // setItems(newItems)
    };

    const handleClear = () => {
        setItems(
            items.map((item) => {
                return { ...item, checked: false };
            })
        );
    };

    return (
        <div>
            <h2>Select Form</h2>
            <span>
                Selected: {items.filter(item => item.checked).map(item => {
                    const { id, name } = item;
                    return <span key={id}>{name},</span>
                })}
            </span>
            <div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isAllSelected}
                            onChange={handleSelectAll}
                        />
                        <span>Select All</span>
                    </label>
                </div>
                {items.map((item) => {
                    const { id, name, checked } = item;
                    return (
                        <div key={id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => handleCheck(id)}
                                />
                                <span>{name}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
            <button onClick={handleClear}>Clear All</button>
        </div>
    );
}

