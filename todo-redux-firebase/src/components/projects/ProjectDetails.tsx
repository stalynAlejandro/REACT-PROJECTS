import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails() {
    let params = useParams<{ id: string }>()

    return (
        <div className="container section project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {params.id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aut deleniti voluptate obcaecati impedit tempora aperiam inventore, ipsa perspiciatis tempore veritatis, quam voluptatibus quo incidunt? Optio natus laborum eius iure.
                    </p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd, September</div>
                </div>
                
            </div>
        </div>
    )
}
export { ProjectDetails }