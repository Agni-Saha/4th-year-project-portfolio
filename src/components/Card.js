import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ image, title, desc, link }) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <NavLink to={link} className="btn btn-primary">
                            Explore the App
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
