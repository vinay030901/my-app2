import { useEffect, useState } from 'react';
import axios from 'axios';
import UserData from './UserData';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
export default function AxiosApp() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(res => res.data).then((data) => {
            setUsers(data);
        })
    }, [])
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])
    return (
        <div>
            <UserData ud={users} />
        </div>
    )
}