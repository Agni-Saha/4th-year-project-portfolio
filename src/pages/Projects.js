import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from "../components/Card"
import ProjectData from '../components/ProjectData'

function Projects() {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center project_buttons_container">
                    <NavLink to="/me_thesis" className="btn-get-started project_buttons">
                        M.E. Thesis
                    </NavLink>
                    <NavLink to="/about" className="btn-get-started project_buttons">
                        B.E. Projects
                    </NavLink>
                    <NavLink to="/about" className="btn-get-started project_buttons">
                        PhD Thesis
                    </NavLink>
                </h1>
                <h1 className="text-center page-header">My Projects</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    ProjectData.map((item) => (
                                        <Card
                                            image={item.image}
                                            title={item.title}
                                            desc={item.desc}
                                            link={item.link}
                                            key={item.id}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
