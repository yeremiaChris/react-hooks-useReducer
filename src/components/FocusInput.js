import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        // fokus input element
        inputRef.current.focus()
        // current itu maksudnya adalah react akan men set ref properti yang terbaru
        // ke dom responding jadi current itu kita bisa mengakses ref properti

    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
