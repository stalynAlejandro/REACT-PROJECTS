import React from 'react'
import { ProjectSummary } from './ProjectSummary'
import { IProject } from '../../store/reducers/projectReducer'

const ProjectList = ({ projects }: { projects: IProject[] }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => (
                <ProjectSummary key={project.id} project={project} />
            ))}
        </div>
    )
}

export { ProjectList }