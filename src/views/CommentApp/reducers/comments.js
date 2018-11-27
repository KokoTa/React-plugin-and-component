// action types
export const INIT_COMMENTS = 'INIT_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export const reducer = (state = { comments: [] } , action) => {

  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments
      }
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      console.log(action.commentIndex)
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}
export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}
export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}