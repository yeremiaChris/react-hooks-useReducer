import React from 'react'

import useCounter from '../hooks/useCounter'

function CounterTwo() {

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

    const [count, increment, decrement, reset] = useCounter(5,10)


    return (
        <div>
            <h2>count = {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
