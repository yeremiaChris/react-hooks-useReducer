import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleOne() {
    
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `count ${count}` 
    // },[count])

    // yang diatas di ganti dengan hooks yang kita buat
    useDocumentTitle(count)

    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>        
        </div>
    )
}

export default DocTitleOne
