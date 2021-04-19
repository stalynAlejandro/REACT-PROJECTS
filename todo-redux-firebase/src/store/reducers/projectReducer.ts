export interface IProject {
    id: string,
    title: string,
    content: string
}

export interface IProjects {
    projects: IProject[]
}

const initialState: IProjects = {
    projects: [
        { id: '1', title: 'help me', content: 'blah blah' },
        { id: '2', title: 'collect', content: 'blah blah' },
        { id: '3', title: 'egg hunt', content: 'blah blah' },
    ]
}

const projectReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CreateProjectReducer', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('CREATE PROJECT ERROR', action.error)
            return state;
        default:
            return state;
    }
}

export { projectReducer }