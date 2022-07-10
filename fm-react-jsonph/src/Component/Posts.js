import React, { useState, useEffect, useContext, useRef } from 'react'
import { AppContext } from '../App';
import { Link } from "react-router-dom"

function Posts() {
    const { postsByUser } = useContext(AppContext)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                    </tr>
                </thead>
                <tbody>
                    {postsByUser.map(p =>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <Link to='/'>Go Back</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Posts