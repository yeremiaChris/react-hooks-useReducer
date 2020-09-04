import React, {useState,useEffect} from 'react'

import axios from 'axios'



function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setpost(res.data)
            setError('')
        })
        .catch(err => {
            setLoading(false)
            // kita set post nya ke object kosong untuk menyembunyikan post yang tersedia yang mungkin di tampilkan di browser
            setpost({})
            setError('something Went wrong')
        })
    }, [])

    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
