import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    console.log("rendering Counter")

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={() => setCount(10)}>Set to 10</button>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}