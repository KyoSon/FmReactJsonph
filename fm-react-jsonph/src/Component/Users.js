import React, { useState, useContext } from 'react'
import { AppContext } from '../App';

function Users() {
    const { users, tranferToAddress, tranferToCompany, tranferToPost } = useContext(AppContext)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Address</th>
                        <th scope="col">Company</th>
                        <th scope="col">Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm" onClick={() => tranferToAddress({ address: user.address })}>Address</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm" onClick={() => tranferToCompany({ company: user.company })}>Company</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm" onClick={() => tranferToPost({ userId: user.id })}>Posts</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default Users;