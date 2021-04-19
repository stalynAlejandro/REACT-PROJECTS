import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { IProject } from '../../store/reducers/projectReducer'

const initialProject: IProject = {
    id: '',
    title: '',
    content: ''
}

function CreateProject() {

    const dispatch = useDispatch()
    const [state, setState] = useState<IProject>(initialProject)

    const handleChange = (e: any) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()  //Prevents the page to reload. 
        dispatch(createProject(state))
    }

    return (
        <div className="container">
            <form onSubmit={e => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>

                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={e => handleChange(e)} />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-texarea" onChange={e => handleChange(e)}></textarea>
                </div>

                <div className="input-field">
                    <button className="btn pink ligthen-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export { CreateProject }