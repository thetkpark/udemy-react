import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()) // wait for fetchPost action creator to finish and dispatch the result

  _.chain(getState().posts) //chain lodash operations
    .map('userId') // get all userIds from posts
    .uniq() // get unique userIds
    .forEach(id => dispatch(fetchUser(id))) // dispatch fetchUser action creator for each unique userId
    .value() // execute all chained operations
}

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get('/posts')

  // need to call dispatch manually with action
  dispatch({
    type: 'FETCH_POSTS',
    payload: res.data
  })
}

export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: res.data
  })
}
