import React from 'react'
import Card from "../components/Card"
import ProjectData from '../components/ProjectData'

function Projects() {
    return (
        <div>
            <div className="my-5">
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
