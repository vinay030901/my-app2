import React, { createContext, useContext, useState } from 'react'

const empContext = createContext()

export default function ContextApp() {
    const [employee] = useState({ id: 101, empName: 'vinay', city: 'mumbai', salary: 12345 })
    return (
        <div>
            <empContext.Provider value={employee}>
                <Employee></Employee>
            </empContext.Provider>
        </div >
    )
}

function Employee(props) {
    let empCon = useContext(empContext)
    return (
        <div>
            <p>Username: {empCon.empName}</p>
            <Salary />
        </div>
    )
}
function Salary(props) {
    const empCon = useContext(empContext)
    console.log(empCon);
    return (
        <div>
            <p>Salary: {empCon.salary}</p>
        </div>
    )
}

