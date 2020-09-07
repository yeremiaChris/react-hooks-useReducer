import React, {useState, useMemo} from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const inrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const inrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div>
            <button onClick={inrementOne}>Counter One {counterOne}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
            <button onClick={inrementTwo}>Counter Two {counterTwo}</button>
        </div>
    )
}

export default Counter
