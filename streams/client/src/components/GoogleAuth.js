import React from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"754641816853-op2uapjckqquls77s32sc8th4lf14lh7.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance()
					this.onAuthChanged(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChanged)
				})
		})
	}

	onAuthChanged = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn()
		} else {
			this.props.signOut()
		}
	}

	onSignInClick = () => {
		this.auth.signIn()
	}

	onSignOutClick = () => {
		this.auth.signOut()
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			)
		}
		return (
			<button className="ui red google button" onClick={this.onSignInClick}>
				<i className="google icon" />
				Sign In With Google
			</button>
		)
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
