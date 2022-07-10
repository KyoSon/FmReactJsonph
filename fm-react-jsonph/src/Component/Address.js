import React, { useState, useEffect, useContext, useRef } from 'react'
import { AppContext } from '../App';
import { Link } from "react-router-dom"

function Address() {
    const { address } = useContext(AppContext)

    return (
        <div>
            <div className="list-group">
                {address.street ?
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Street      :       {address.street}</li>
                        <li className="list-group-item">Suite       :       {address.suite}</li>
                        <li className="list-group-item">City        :       {address.city}</li>
                        <li className="list-group-item">Zipcode     :       {address.zipcode}</li>
                        <li className="list-group-item">Geo         : </li>
                        <li className="list-group-item">Lat         :       {address.geo.lat}</li>
                        <li className="list-group-item">lng         :       {address.geo.lng}</li>
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

export default Address;