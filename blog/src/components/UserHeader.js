import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {
  render() {
    const { user } = this.props
    return user ? <div className="header">{user.name}</div> : null
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.userId)
  }
}

export default connect(mapStateToProps)(UserHeader)
