import React from 'react'

function Button({handleClick, children}) {
    console.log(`rendering - ${children}` );
    return (
        <div>
            <button onClick={handleClick}>
                {children}
                {/* isinya children itu ada di text yang ada di dalam parentComponent */}
            </button>
        </div>
    )
}

export default React.memo(Button)
