import { isMobile } from 'utils/scaleFunctions';
import { CommentContainer } from './styled';

interface IComment {
    comment: string;
    editable: boolean;
    onChangeComment: (comment: string) => void;
}
export function Comment({ comment, editable, onChangeComment }: IComment) {
    return (
        <CommentContainer
            multiline
            value={comment}
            editable={editable}
            onChangeText={onChangeComment}
            maxLength={isMobile ? 60 : 150}
        />
    );
}
