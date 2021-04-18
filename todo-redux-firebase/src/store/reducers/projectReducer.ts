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
    return state
}

export { projectReducer }