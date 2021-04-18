import React from 'react'
import { Notifications } from './Notifications'
import { ProjectList } from '../projects/ProjectList'
import { useSelector } from 'react-redux'
import { IProjects } from '../../store/reducers/projectReducer'
import { RootState } from '../../store/reducers/rootReducer'

function Dashboard() {

    const projectState = useSelector((state: RootState) => state.project) as IProjects

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projectState.projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>

            </div>
        </div>
    )
}

export { Dashboard }