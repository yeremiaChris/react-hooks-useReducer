import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setlastName] = useState('')


    const [firstName,bindFirstName,resetFirstName] =  useInput('')
    const [lastName,bindlastName,resetLastName] =  useInput('')



    const submitHandler = e => {
        e.preventDefault()
        alert(`hello  ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* <div>
                    <label for="">First name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div> */}
                <div>
                    <label for="">First name</label>
                    <input type="text" {...bindFirstName}/>
                </div>
                <div>
                    <label for="">Last name</label>
                    <input type="text" {...bindlastName}/>
                </div>

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default UserForm
