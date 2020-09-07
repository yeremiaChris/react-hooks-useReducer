import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    // menggunakan useRef supaya kita bisa mengakses value yang ada didalam useEffect karena value yang ada di useEffect hanya bisa di gunakan di dalam useEffect
    // makanya kita pake useRef agar bisa kita mengaksesnya


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])

    return (
        <div>
            count timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>clear timer</button>    
        </div>
    )
}

export default HookTimer
