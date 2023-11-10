import { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8090/insurance-service/policiesByPolicyTypeId/1';
export default class InsuranceApp extends Component {
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
                <p>User data</p>
                {this.state.users.map((user) => (
                    <div key={user.policyId}>
                        <p>Id: {user.policyId}</p>
                        <p>Name: {user.policyName}</p>
                        <p>Username: {user.policyCompany}</p>
                    </div>
                ))}
            </div>
        )
    }
}