import React, { useState } from 'react'

export default function UseStateComponent() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>IncrementCounter</button>
            <button onClick={() => setCounter(counter - 1)}>DecrementCounter</button>

        </div>
    )
}
