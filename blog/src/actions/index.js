import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get('/posts')

  // need to call dispatch manually with action
  dispatch({
    type: 'FETCH_POSTS',
    payload: res.data
  })
}
