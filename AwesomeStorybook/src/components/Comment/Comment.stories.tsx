import { Comment } from './index';

const arrowNotes = `
# Arrow Button Notes

This button is used to navigate between screens.
`;

export default {
    title: 'components/ArrowButton',
    component: Comment,
    parameters: {
        notes: arrowNotes,
    },
    argTypes: {
        directionArrow: {
            options: ['top', 'left', 'right', 'down'],
            control: { type: 'select' },
        },
    },
} as unknown as typeof Comment;
