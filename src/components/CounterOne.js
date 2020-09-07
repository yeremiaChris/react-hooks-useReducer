import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {

        // const [count, setCount] = useState(0)

        // const increment = () => {
        //     setCount(prevCount => prevCount + 1)
        // }

        // const decrement = () => {
        //     setCount(prevCount => prevCount - 1)
        // }

        // const reset = () => {
        //     setCount(0)
        // }
    const [count,decrement,increment,reset] = useCounter(1,2)

    return (
        <div>
            <h2>count = {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterOne
