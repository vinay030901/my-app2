function UserData(props) {
    return (
        <div>
            <h2>User Data</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ud.map((dt) => (
                        <tr key={dt.id}>
                            <td>{dt.id}</td>
                            <td>{dt.name}</td>
                            <td>{dt.username}</td>
                            <td>{dt.email}</td>
                            <td>{dt.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default UserData