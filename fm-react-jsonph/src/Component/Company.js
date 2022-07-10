import React, { useState, useEffect, useContext, useRef } from 'react'
import { AppContext } from '../App';
import { Link } from "react-router-dom"

function Company() {
    const { company } = useContext(AppContext)

    return (
        <div>
            <div className="list-group">
                {company.name ?
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Street      :       {company.name}</li>
                        <li className="list-group-item">Suite       :       {company.catchPhrase}</li>
                        <li className="list-group-item">City        :       {company.bs}</li>
                        <li className="list-group-item"><Link to='/'>Go Back</Link></li>
                    </ul>
                    :
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">No Data</li>
                        <li className="list-group-item"><Link to='/'>Go Back</Link></li>
                    </ul>}
            </div>
        </div>
    )
}

export default Company