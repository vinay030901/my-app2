import React, { useEffect, useState } from 'react'

export default function NotesApp() {
    const [users, setUsers] = useState([])
    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const addUser = (e) => {
        e.preventDefault()
        setUsers([...users, { title, email }])
        setTitle('')
        setEmail('')
    }
    const deleteUser = (email) => {
        setUsers(users.filter((i) => i.email !== email))
    }
    // const deleteUserById = (id) => {
    //     setUsers(users.filter((i) => users.indexOf(i) !== id))
    // }
    useEffect(() => {
        setUsers(() => JSON.parse(localStorage.getItem('users')))
    }, [])
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users]) // use effect is the combination of componentdidmount and update, and if just want update only, then we can insert [] in it
    return (
        <div>
            Userdata
            {users.map((user, id) => <div key={users.indexOf(user)}>
                {user.title}
                {user.email}
                <button onClick={() => deleteUser(user.email)}>Delete</button>
            </div>)}
            <form onSubmit={addUser}>
                Enter username: <input required type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                Enter email: <input required type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Add User</button>
            </form>
        </div >
    )
}
