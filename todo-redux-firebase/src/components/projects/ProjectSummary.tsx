import React from 'react'
import { IProject } from '../../store/reducers/projectReducer'

const ProjectSummary = ({ project }: { project: IProject }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content gery-text text-darken-3">
                <span className="card-title">{project.title} - {project.id}</span>
                <p>{project.content}</p>
                {/* <p className="grey-text">3rd, Septembre, 2 am</p> */}
            </div>
        </div>
    )
}

export { ProjectSummary }