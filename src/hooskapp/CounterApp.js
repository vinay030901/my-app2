import React, { useEffect, useState } from 'react'

export default function CounterApp() {
    //init the state.
    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log('called everytime');
    }, [count])
    return (
        <div>
            <p>the count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(10)}>Reset</button>
        </div>
    )
}
