import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Todat at 4:45 PM"
        content="Nice"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Todat at 2:00 PM"
        content="Very Good"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00 PM"
        content="What's is this"
        avatar={faker.image.image()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
