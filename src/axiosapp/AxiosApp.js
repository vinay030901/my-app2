import { Component } from 'react';
import axios from 'axios';
import UserData from './UserData';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
export default class AxiosApp extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get(API_URL).then(res => res.data).then((data) => {
            this.setState({ users: data });
        })
    }

    render() {
        return (
            <div>
                <UserData ud={this.state.users} />
            </div>
        )
    }
}